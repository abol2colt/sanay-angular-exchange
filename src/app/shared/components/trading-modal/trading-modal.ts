import { Component, computed, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { MarketStoreService } from '../../../core/store/market-store.service';
import { TradingModalService } from '../../../core/services/trading-modal.service';
import { formatPrice } from '../../utils/price-helpers';

type TradeSide = 'buy' | 'sell';

@Component({
  selector: 'app-trading-modal',
  imports: [NgClass],
  templateUrl: './trading-modal.html',
  styleUrl: './trading-modal.scss',
})
export class TradingModalComponent {
  tradingModal = inject(TradingModalService);
  private marketStore = inject(MarketStoreService);

  tradeSide = signal<TradeSide>('buy');
  priceInput = signal(0);
  amountInput = signal(0);

  coin = computed(() => {
    const symbol = this.tradingModal.activeSymbol();

    if (!symbol) {
      return null;
    }

    return this.marketStore.getCoinBySymbol(symbol);
  });

  displaySymbol = computed(() => {
    return this.coin()?.symbol.toUpperCase() || '';
  });

  currentPrice = computed(() => {
    return Number(this.coin()?.price ?? 0);
  });

  totalValue = computed(() => {
    const price = Number(this.priceInput()) || this.currentPrice();
    const amount = Number(this.amountInput()) || 0;

    return price * amount;
  });

  tradeJournal = [
    {
      side: 'خرید',
      time: 'امروز 12:20',
      text: 'خرید 0.24 BTC در قیمت 64,280$',
      result: 'سود فعلی: +184$',
      tone: 'text-green-400',
    },
    {
      side: 'فروش',
      time: 'دیروز 17:40',
      text: 'فروش 0.10 BTC در قیمت 66,050$',
      result: 'سود نهایی: +96$',
      tone: 'text-red-400',
    },
  ];

  setTradeSide(side: TradeSide): void {
    this.tradeSide.set(side);
  }

  updatePrice(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.priceInput.set(Number(input.value) || 0);
  }

  updateAmount(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.amountInput.set(Number(input.value) || 0);
  }

  close(): void {
    this.resetForm();
    this.tradingModal.close();
  }

  closeFromBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  resetForm(): void {
    this.tradeSide.set('buy');
    this.priceInput.set(0);
    this.amountInput.set(0);
  }

  formatPrice(value: number): string {
    return formatPrice(value);
  }
}
