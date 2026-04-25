import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TradingModalService {
  private activeSymbolState = signal<string | null>(null);

  activeSymbol = computed(() => this.activeSymbolState());
  isOpen = computed(() => this.activeSymbolState() !== null);

  open(symbol: string): void {
    const normalized = symbol.trim().toLowerCase();

    if (!normalized) {
      return;
    }

    this.activeSymbolState.set(normalized);
  }

  close(): void {
    this.activeSymbolState.set(null);
  }
}
