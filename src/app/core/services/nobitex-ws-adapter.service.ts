import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import * as CentrifugePkg from 'centrifuge';
import { LiveTicker } from '../models/live-ticker.model';

const NOBITEX_SOCKET_URL = 'wss://ws.nobitex.ir/connection/websocket';
const QUOTE_ASSET = 'USDT';

type NobitexPublicationContext = {
  data?: NobitexTickerPayload;
};

type NobitexTickerPayload = {
  latest?: string | number;
  last?: string | number;
  changePercent?: string | number;
  dayChange?: string | number;
};

type NobitexSubscription = {
  on(
    eventName: 'publication' | 'error',
    handler: (context: NobitexPublicationContext | unknown) => void,
  ): void;
  subscribe(): void;
};

type NobitexClient = {
  on(eventName: 'connected' | 'disconnected' | 'error', handler: (context?: unknown) => void): void;
  newSubscription(channel: string): NobitexSubscription;
  connect(): void;
  disconnect(): void;
};

type NobitexClientConstructor = new (url: string) => NobitexClient;

export interface NobitexWsHandlers {
  onTicker: (ticker: LiveTicker) => void;
  onConnected?: () => void;
  onFailure?: (reason: unknown) => void;
  onDisconnected?: (context?: unknown) => void;
  onError?: (context?: unknown) => void;
}

@Injectable({
  providedIn: 'root',
})
export class NobitexWsAdapterService {
  private platformId = inject(PLATFORM_ID);
  private client: NobitexClient | null = null;

  connect(symbols: string[], handlers: NobitexWsHandlers): NobitexClient | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const CentrifugeClass = this.getCentrifugeClass();

    if (!CentrifugeClass) {
      handlers.onFailure?.('nobitex_missing_centrifuge_library');
      return null;
    }

    const normalizedSymbols = this.getUniqueSymbols(symbols);

    if (!normalizedSymbols.length) {
      handlers.onFailure?.('nobitex_empty_symbols');
      return null;
    }

    this.disconnect();

    let hasConnectedOnce = false;
    let hasFailedBeforeConnect = false;

    const failBeforeConnect = (reason: unknown) => {
      if (hasConnectedOnce || hasFailedBeforeConnect) {
        return;
      }

      hasFailedBeforeConnect = true;
      handlers.onFailure?.(reason);
      this.disconnect();
    };

    try {
      const client = new CentrifugeClass(NOBITEX_SOCKET_URL);
      this.client = client;

      client.on('connected', () => {
        hasConnectedOnce = true;
        handlers.onConnected?.();
      });

      client.on('disconnected', (context) => {
        handlers.onDisconnected?.(context);

        if (!hasConnectedOnce) {
          failBeforeConnect(context ?? 'nobitex_disconnected_before_connect');
        }
      });

      client.on('error', (context) => {
        handlers.onError?.(context);

        if (!hasConnectedOnce) {
          failBeforeConnect(context ?? 'nobitex_error_before_connect');
        }
      });

      normalizedSymbols.forEach((symbol) => {
        this.subscribeToTicker(client, symbol, handlers);
      });

      client.connect();

      return client;
    } catch (error) {
      this.client = null;
      handlers.onFailure?.(error);
      return null;
    }
  }

  disconnect(client = this.client): void {
    if (!client) {
      return;
    }

    client.disconnect();

    if (client === this.client) {
      this.client = null;
    }
  }

  private subscribeToTicker(
    client: NobitexClient,
    symbol: string,
    handlers: NobitexWsHandlers,
  ): void {
    const channel = this.buildMarketChannel(symbol);
    const subscription = client.newSubscription(channel);

    subscription.on('publication', (context) => {
      const ticker = this.parsePublication(symbol, context as NobitexPublicationContext);

      if (!ticker) {
        return;
      }

      handlers.onTicker(ticker);
    });

    subscription.on('error', (context) => {
      handlers.onError?.(context);
    });

    subscription.subscribe();
  }

  private parsePublication(symbol: string, context: NobitexPublicationContext): LiveTicker | null {
    const payload = context.data ?? {};
    const price = Number.parseFloat(String(payload.latest ?? payload.last ?? '0'));
    const change24h = Number.parseFloat(String(payload.changePercent ?? payload.dayChange ?? '0'));

    if (!Number.isFinite(price) || price <= 0) {
      return null;
    }

    return {
      symbol,
      price,
      change24h: Number.isFinite(change24h) ? change24h : 0,
    };
  }

  private buildMarketChannel(symbol: string): string {
    return `public:market-stats-${symbol.toUpperCase()}${QUOTE_ASSET}`;
  }

  private getUniqueSymbols(symbols: string[]): string[] {
    const normalizedSymbols = symbols.map((symbol) => this.normalizeSymbol(symbol)).filter(Boolean);

    return [...new Set(normalizedSymbols)];
  }

  private normalizeSymbol(symbol: string): string {
    return String(symbol || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
  }

  private getCentrifugeClass(): NobitexClientConstructor | null {
    const pkg = CentrifugePkg as unknown as {
      Centrifuge?: NobitexClientConstructor;
      default?: NobitexClientConstructor;
    };

    return pkg.Centrifuge ?? pkg.default ?? null;
  }
}
