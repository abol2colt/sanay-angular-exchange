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

  coins = computed(() => Object.values(this.coinsState()));

  filteredCoins = computed(() => {
    const query = this.searchQueryState().trim().toLowerCase();

    if (!query) {
      return this.coins();
    }

    return this.coins().filter((coin) => {
      return coin.name.toLowerCase().includes(query) || coin.symbol.toLowerCase().includes(query);
    });
  });

  watchlistCoins = computed(() => {
    const watchlist = this.watchlistSymbolsState();
    return this.coins().filter((coin) => watchlist.includes(coin.symbol));
  });

  searchQuery = computed(() => this.searchQueryState());
  activeProvider = computed(() => this.activeProviderState());
  connectionStatus = computed(() => this.connectionStatusState());

  setCoins(coins: Record<string, Coin>): void {
    const normalizedCoins: Record<string, Coin> = {};
    for (const key in coins) {
      if (coins.hasOwnProperty(key)) {
        normalizedCoins[key.trim().toLowerCase()] = coins[key];
      }
    }
    this.coinsState.set({ ...normalizedCoins });
  }

  setSearchQuery(query: string): void {
    this.searchQueryState.set(query.toLowerCase());
  }

  toggleWatchlist(symbol: string): void {
    const normalized = symbol.trim().toLowerCase();

    this.watchlistSymbolsState.update((current) => {
      return current.includes(normalized)
        ? current.filter((item) => item !== normalized)
        : [...current, normalized];
    });
  }

  hasWatchlistItems = computed(() => this.watchListCount() > 0);
  watchListCount = computed(() => {
    const allWatch = this.watchlistCoins();
    return allWatch.length;
  });

  sortedCoins = computed(() => {
    const allCoins = this.coins();
    return [...allCoins].sort((a, b) => Math.abs(b.change24h) - Math.abs(a.change24h)).slice(0, 3);
  });

  normalizeSymbol(symbol: string) {
    const symbolNormal = this.getNormalizedKey(symbol);
    return this.coinsState()[symbolNormal];
  }

  getNormalizedKey(symbol: string) {
    return symbol
      .trim()
      .toLocaleLowerCase()
      .replace(/[^a-z0-9]/g, '');
  }

  isInWatchlist(symbol: string): boolean {
    return this.watchlistSymbolsState().includes(symbol.trim().toLowerCase());
  }

  getCoinBySymbol(symbol: string): Coin | null {
    return this.coinsState()[symbol.trim().toLowerCase()] ?? null;
  }

  setActiveProvider(provider: string): void {
    this.activeProviderState.set(provider);
  }

  setConnectionStatus(status: ConnectionStatus): void {
    this.connectionStatusState.set(status);
  }

  updateCoinPrice(symbol: string, newPrice: number, change24h?: number): void {
    const normalized = this.getNormalizedKey(symbol);

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
          change24h: change24h ?? coin.change24h,
        },
      };
    });
  }
}
