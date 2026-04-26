import { Injectable, inject } from '@angular/core';
import { MarketStoreService } from '../store/market-store.service';
import { BinanceWsAdapterService } from './binance-ws-adapter.service';
import { NobitexWsAdapterService, NobitexClient } from './nobitex-ws-adapter.service';
import { FakeLiveFlowService } from './fake-live-flow.service';
import { LiveTicker } from '../models/live-ticker.model';

const BINANCE_TIMEOUT_MS = 5000;

type LiveProvider = 'None' | 'Binance' | 'Nobitex' | 'Fake';

type ActiveLiveConnection =
  | {
      provider: 'Binance';
      connection: WebSocket;
      fallbackReason?: unknown;
    }
  | {
      provider: 'Nobitex';
      connection: NobitexClient;
      fallbackReason?: unknown;
    }
  | {
      provider: 'Fake';
      connection: null;
      fallbackReason?: unknown;
    };

@Injectable({
  providedIn: 'root',
})
export class ConnectionOrchestrationService {
  private marketStore = inject(MarketStoreService);
  private binanceAdapter = inject(BinanceWsAdapterService);
  private nobitexAdapter = inject(NobitexWsAdapterService);
  private fakeLiveFlow = inject(FakeLiveFlowService);

  private activeConnection: ActiveLiveConnection | null = null;
  private binanceTimeoutId: ReturnType<typeof setTimeout> | null = null;

  start(): void {
    const symbols = this.getSymbols();

    if (!symbols.length) {
      this.setConnectionState('None', 'error', false);
      return;
    }

    this.stop();
    this.startBinance(symbols);
  }

  stop(): void {
    this.clearBinanceTimeout();

    if (!this.activeConnection) {
      this.fakeLiveFlow.stop();
      this.setConnectionState('None', 'idle', false);
      return;
    }

    switch (this.activeConnection.provider) {
      case 'Binance':
        this.binanceAdapter.disconnect(this.activeConnection.connection);
        break;

      case 'Nobitex':
        this.nobitexAdapter.disconnect(this.activeConnection.connection);
        break;

      case 'Fake':
        this.fakeLiveFlow.stop();
        break;
    }

    this.activeConnection = null;
    this.setConnectionState('None', 'idle', false);
  }

  private startBinance(symbols: string[]): void {
    this.setConnectionState('Binance', 'connecting', false);

    const socket = this.binanceAdapter.connect(symbols, {
      onOpen: () => {
        this.clearBinanceTimeout();
        this.setConnectionState('Binance', 'live', true);
      },

      onTicker: (ticker) => {
        this.handleLiveTicker(ticker);
      },

      onError: (error) => {
        console.warn('Binance WebSocket error:', error);
      },

      onClose: (event) => {
        console.warn('Binance WebSocket closed:', event);
      },
    });

    if (!socket) {
      this.startNobitex(symbols, 'binance_init_failed');
      return;
    }

    this.activeConnection = {
      provider: 'Binance',
      connection: socket,
    };

    this.binanceTimeoutId = setTimeout(() => {
      if (socket.readyState !== WebSocket.OPEN) {
        this.startNobitex(symbols, 'binance_timeout');
      }
    }, BINANCE_TIMEOUT_MS);
  }

  private startNobitex(symbols: string[], reason: unknown): void {
    this.clearBinanceTimeout();

    if (this.activeConnection?.provider === 'Binance') {
      this.binanceAdapter.disconnect(this.activeConnection.connection);
    }

    this.setConnectionState('Nobitex', 'connecting', false);

    const client = this.nobitexAdapter.connect(symbols, {
      onConnected: () => {
        this.setConnectionState('Nobitex', 'live', true);
      },

      onTicker: (ticker) => {
        this.handleLiveTicker(ticker);
      },

      onFailure: (failureReason) => {
        this.startFake(failureReason);
      },

      onDisconnected: (context) => {
        console.warn('Nobitex disconnected:', context);
      },

      onError: (context) => {
        console.warn('Nobitex error:', context);
      },
    });

    if (!client) {
      this.startFake(reason ?? 'nobitex_init_failed');
      return;
    }

    this.activeConnection = {
      provider: 'Nobitex',
      connection: client,
      fallbackReason: reason,
    };
  }

  private startFake(reason: unknown): void {
    this.clearBinanceTimeout();

    if (this.activeConnection?.provider === 'Binance') {
      this.binanceAdapter.disconnect(this.activeConnection.connection);
    }

    if (this.activeConnection?.provider === 'Nobitex') {
      this.nobitexAdapter.disconnect(this.activeConnection.connection);
    }

    this.activeConnection = {
      provider: 'Fake',
      connection: null,
      fallbackReason: reason,
    };

    this.fakeLiveFlow.start();
  }

  private handleLiveTicker(ticker: LiveTicker): void {
    if (!ticker.symbol || ticker.price <= 0) {
      return;
    }

    this.marketStore.updateCoinPrice(ticker.symbol, ticker.price, ticker.change24h);
  }

  private getSymbols(): string[] {
    return this.marketStore.coins().map((coin) => coin.symbol);
  }

  private setConnectionState(
    provider: LiveProvider,
    phase: 'idle' | 'connecting' | 'live' | 'degraded' | 'error',
    isLive: boolean,
  ): void {
    this.marketStore.setActiveProvider(provider);

    this.marketStore.setConnectionStatus({
      provider,
      phase,
      isLive,
    });
  }

  private clearBinanceTimeout(): void {
    if (!this.binanceTimeoutId) {
      return;
    }

    clearTimeout(this.binanceTimeoutId);
    this.binanceTimeoutId = null;
  }
}
