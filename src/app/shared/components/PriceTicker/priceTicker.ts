import { Component, inject, signal } from '@angular/core';
import { MarketStoreService } from '../../../core/store/market-store.service';
import { formatPrice, getChangeMeta } from '../../utils/price-helpers'; //
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-price-ticker',
  standalone: true,
  imports: [NgClass],
  templateUrl: './priceTicker.html',
  styleUrl: './priceTicker.scss',
})
export class PriceTickerComponent {
  private marketStore = inject(MarketStoreService);
  protected topCoins = this.marketStore.sortedCoins;

  isPaused = signal(false);

  getMeta(change: number) {
    return getChangeMeta(change);
  }
  format(price: number) {
    return formatPrice(price);
  }
}
