import { Injectable, inject } from '@angular/core';
import { MarketStoreService } from '../store/market-store.service';

const MIN_PRICE = 0.1;
const TICK_MS = 2000;
const MAX_PRICE_DELTA = 25;
const MAX_CHANGE_DELTA = 1.5;

@Injectable({
  providedIn: 'root',
})
export class FakeLiveFlowService {
  private marketStore = inject(MarketStoreService);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  start(): void {
    if (this.intervalId) {
      return;
    }

    this.marketStore.setActiveProvider('Fake');

    this.marketStore.setConnectionStatus({
      phase: 'degraded',
      provider: 'Fake',
      isLive: true,
    });

    this.intervalId = setInterval(() => {
      this.tick();
    }, TICK_MS);
  }

  stop(): void {
    if (!this.intervalId) {
      return;
    }

    clearInterval(this.intervalId);
    this.intervalId = null;

    this.marketStore.setActiveProvider('None');

    this.marketStore.setConnectionStatus({
      phase: 'idle',
      provider: 'None',
      isLive: false,
    });
  }

  private tick(): void {
    const coins = this.marketStore.coins();

    coins.forEach((coin) => {
      const nextPrice = this.calculateNextPrice(coin.price);
      const nextChange = this.calculateNextChange(coin.change24h);

      this.marketStore.updateCoinPrice(coin.symbol, nextPrice, nextChange);
    });
  }

  private calculateNextPrice(currentPrice: number): number {
    return Math.max(MIN_PRICE, currentPrice + this.randomDelta(MAX_PRICE_DELTA));
  }

  private calculateNextChange(currentChange = 0): number {
    return currentChange + this.randomDelta(MAX_CHANGE_DELTA);
  }

  private randomDelta(range: number): number {
    return (Math.random() - 0.5) * (range * 2);
  }
}
