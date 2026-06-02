import { Injectable, computed, signal } from '@angular/core';
import { Coin } from '../models/coin.model';
import { ConnectionStatus } from '../models/connection-status.model';
import { DEFAULT_CONNECTION_STATUS } from '../models/default-connection-status';

@Injectable({
  providedIn: 'root',
})
export class MarketStoreService {
  private coinsState = signal<Record<string, Coin>>({});
  private searchQueryState = signal('');
  private watchlistSymbolsState = signal<string[]>([]);
  private activeProviderState = signal('None');
  private connectionStatusState = signal<ConnectionStatus>(DEFAULT_CONNECTION_STATUS);

  readonly coins = computed(() => Object.values(this.coinsState()));
  readonly searchQuery = computed(() => this.searchQueryState());
  readonly activeProvider = computed(() => this.activeProviderState());
  readonly connectionStatus = computed(() => this.connectionStatusState());

  readonly filteredCoins = computed(() => {
    const query = this.searchQueryState().trim().toLowerCase();

    if (!query) {
      return this.coins();
    }

    return this.coins().filter((coin) => {
      return coin.name.toLowerCase().includes(query) || coin.symbol.toLowerCase().includes(query);
    });
  });

  readonly watchlistCoins = computed(() => {
    const watchlist = new Set(this.watchlistSymbolsState());
    return this.coins().filter((coin) => watchlist.has(this.getNormalizedKey(coin.symbol)));
  });

  readonly watchlistCount = computed(() => this.watchlistCoins().length);
  readonly hasWatchlistItems = computed(() => this.watchlistCount() > 0);

  readonly sortedCoins = computed(() => {
    return [...this.coins()]
      .sort((a, b) => Math.abs(b.change24h) - Math.abs(a.change24h))
      .slice(0, 3);
  });

  setCoins(coins: Record<string, Coin>): void {
    const normalizedCoins = Object.entries(coins).reduce<Record<string, Coin>>(
      (acc, [key, coin]) => {
        const normalizedKey = this.getNormalizedKey(key || coin.symbol);

        if (normalizedKey) {
          acc[normalizedKey] = {
            ...coin,
            symbol: this.getNormalizedKey(coin.symbol),
          };
        }

        return acc;
      },
      {},
    );

    this.coinsState.set(normalizedCoins);
  }

  setSearchQuery(query: string): void {
    this.searchQueryState.set(query.trim().toLowerCase());
  }

  toggleWatchlist(symbol: string): void {
    const normalized = this.getNormalizedKey(symbol);

    if (!normalized) {
      return;
    }

    this.watchlistSymbolsState.update((current) => {
      return current.includes(normalized)
        ? current.filter((item) => item !== normalized)
        : [...current, normalized];
    });
  }

  isInWatchlist(symbol: string): boolean {
    return this.watchlistSymbolsState().includes(this.getNormalizedKey(symbol));
  }

  getCoinBySymbol(symbol: string): Coin | null {
    return this.coinsState()[this.getNormalizedKey(symbol)] ?? null;
  }

  setActiveProvider(provider: string): void {
    this.activeProviderState.set(provider.trim() || 'None');
  }

  setConnectionStatus(status: ConnectionStatus): void {
    this.connectionStatusState.set({ ...status });
  }

  updateCoinPrice(symbol: string, newPrice: number, change24h?: number): void {
    const normalized = this.getNormalizedKey(symbol);

    if (!Number.isFinite(newPrice) || newPrice <= 0) {
      return;
    }

    this.coinsState.update((current) => {
      const coin = current[normalized];

      if (!coin) {
        return current;
      }

      return {
        ...current,
        [normalized]: {
          ...coin,
          price: newPrice,
          change24h: Number.isFinite(change24h) ? Number(change24h) : coin.change24h,
        },
      };
    });
  }

  private getNormalizedKey(symbol: string): string {
    return String(symbol || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
  }
}
