import { TestBed } from '@angular/core/testing';
import { MarketStoreService } from './market-store.service';

describe('MarketStoreService', () => {
  let store: MarketStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    store = TestBed.inject(MarketStoreService);
    store.setCoins({
      BTC: {
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 68000,
        change24h: 2.5,
        image: '',
      },
      eth: {
        name: 'Ethereum',
        symbol: 'eth',
        price: 3200,
        change24h: -1,
        image: '',
      },
    });
  });

  it('should normalize and expose market coins', () => {
    expect(store.coins().map((coin) => coin.symbol)).toEqual(['btc', 'eth']);
  });

  it('should filter coins by symbol or name', () => {
    store.setSearchQuery('bit');

    expect(store.filteredCoins().map((coin) => coin.symbol)).toEqual(['btc']);
  });

  it('should toggle watchlist symbols with normalized keys', () => {
    store.toggleWatchlist('BTC/USDT');

    expect(store.isInWatchlist('BTCUSDT')).toBe(true);
    expect(store.watchlistCount()).toBe(0);

    store.toggleWatchlist('BTC/USDT');

    expect(store.isInWatchlist('btcusdt')).toBe(false);
  });

  it('should update a known coin price safely', () => {
    store.updateCoinPrice('BTC', 69000, 3.1);

    expect(store.getCoinBySymbol('btc')?.price).toBe(69000);
    expect(store.getCoinBySymbol('btc')?.change24h).toBe(3.1);
  });
});
