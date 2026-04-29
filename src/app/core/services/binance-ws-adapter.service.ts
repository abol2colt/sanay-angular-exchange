import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { LiveTicker } from '../models/live-ticker.model';

const BINANCE_BASE_URL = 'wss://stream.binance.com:9443/stream?streams=';
const QUOTE_ASSET = 'usdt';
//message model ws
interface BinanceTickerPayload {
  s?: string;
  c?: string;
  P?: string;
}

interface BinanceCombinedPayload {
  stream?: string;
  data?: BinanceTickerPayload;
}

export interface BinanceWsHandlers {
  onTicker: (ticker: LiveTicker) => void;
  onOpen?: (event: Event) => void;
  onError?: (error: Event | unknown) => void;
  onClose?: (event: CloseEvent) => void;
}

@Injectable({
  providedIn: 'root',
})
export class BinanceWsAdapterService {
  private platformId = inject(PLATFORM_ID);
  private socket: WebSocket | null = null;

  connect(symbols: string[], handlers: BinanceWsHandlers): WebSocket | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    const socketUrl = this.buildSocketUrl(symbols);

    if (!socketUrl) {
      console.warn('Binance symbols list is empty.');
      return null;
    }

    this.disconnect();

    try {
      const socket = new WebSocket(socketUrl);
      this.socket = socket;

      socket.onopen = (event) => {
        handlers.onOpen?.(event);
      };

      socket.onmessage = (event) => {
        const ticker = this.parseMessage(event.data);

        if (!ticker) {
          return;
        }

        handlers.onTicker(ticker);
      };

      socket.onerror = (error) => {
        handlers.onError?.(error);
      };

      socket.onclose = (event) => {
        if (this.socket === socket) {
          this.socket = null;
        }

        handlers.onClose?.(event);
      };

      return socket;
    } catch (error) {
      this.socket = null;
      handlers.onError?.(error);
      return null;
    }
  }

  disconnect(socket = this.socket): void {
    if (!socket) {
      return;
    }

    if (socket.readyState !== WebSocket.CLOSED && socket.readyState !== WebSocket.CLOSING) {
      socket.close();
    }

    if (socket === this.socket) {
      this.socket = null;
    }
  }

  private buildSocketUrl(symbols: string[]): string | null {
    const streams = this.buildStreamNames(symbols);

    if (!streams.length) {
      return null;
    }

    return `${BINANCE_BASE_URL}${streams.join('/')}`;
  }

  private buildStreamNames(symbols: string[]): string[] {
    return [
      ...new Set(symbols.map((symbol) => this.normalizeBaseSymbol(symbol)).filter(Boolean)),
    ].map((symbol) => `${symbol}${QUOTE_ASSET}@ticker`);
  }

  private parseMessage(rawData: string): LiveTicker | null {
    try {
      const payload = JSON.parse(rawData) as BinanceCombinedPayload;
      const ticker = payload.data ?? {};
      const fallbackPair = payload.stream ? payload.stream.split('@')[0] : '';

      const symbol = this.normalizeBinancePair(ticker.s ?? fallbackPair);
      const price = Number.parseFloat(ticker.c ?? '0');
      const change24h = Number.parseFloat(ticker.P ?? '0');

      if (!symbol || !Number.isFinite(price) || price <= 0) {
        return null;
      }

      return {
        symbol,
        price,
        change24h: Number.isFinite(change24h) ? change24h : 0,
      };
    } catch (error) {
      console.warn('Unable to parse Binance message.', error);
      return null;
    }
  }

  private normalizeBaseSymbol(symbol: string): string {
    return String(symbol || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
  }

  private normalizeBinancePair(pair: string): string {
    const normalized = this.normalizeBaseSymbol(pair);

    if (normalized.endsWith(QUOTE_ASSET)) {
      return normalized.slice(0, -QUOTE_ASSET.length);
    }

    return normalized;
  }
  private normalizeSymbol(symbol: string): string {
    return String(symbol || '')
      .trim()
      .toLowerCase()
      .replace(/[a-z0-9]/g, '');
  }
}
//BinanceWsAdapterService → onTicker → ConnectionOrchestrationService → MarketStoreService → UI reactive update
