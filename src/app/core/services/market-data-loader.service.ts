import { Injectable, inject } from '@angular/core';
import { MockMarketDataService } from './mock-market-data.service';
import { MarketStoreService } from '../store/market-store.service';

@Injectable({
  providedIn: 'root',
})
export class MarketDataLoaderService {
  private mockMarketDataService = inject(MockMarketDataService);
  private marketStore = inject(MarketStoreService);

  private hasLoaded = false;

  loadOnce(): void {
    if (this.hasLoaded || this.marketStore.coins().length > 0) {
      return;
    }

    const coins = this.mockMarketDataService.getCoins();

    this.marketStore.setCoins(coins);
    this.hasLoaded = true;
  }
}
