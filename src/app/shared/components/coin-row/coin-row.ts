import { Component, Input, Output, inject, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { Coin } from '../../../core/models/coin.model';
import { MarketStoreService } from '../../../core/store/market-store.service';
import { getCoinBadgeColor } from '../../utils/coin-badge-colors';
import { formatPrice, getChangeMeta } from '../../utils/price-helpers';

@Component({
  selector: 'app-coin-row',
  imports: [NgClass],
  templateUrl: './coin-row.html',
  styleUrl: './coin-row.scss',
})
export class CoinRowComponent {
  @Input() coin!: Coin;

  @Output() toggle = new EventEmitter<string>();

  private router = inject(Router);
  private marketStore = inject(MarketStoreService);

  get symbol(): string {
    return this.coin.symbol.trim().toLowerCase();
  }

  get displaySymbol(): string {
    return this.coin.symbol.toUpperCase();
  }

  get displayName(): string {
    return this.coin.name || this.displaySymbol;
  }

  get initial(): string {
    return this.displaySymbol.charAt(0) || '?';
  }

  get badgeColor(): string {
    return getCoinBadgeColor(this.symbol);
  }

  get isStarred(): boolean {
    return this.marketStore.isInWatchlist(this.symbol);
  }

  get changeMeta() {
    return getChangeMeta(this.coin.change24h);
  }

  formatPrice(value: number): string {
    return formatPrice(value);
  }

  toggleWatchlist(event: MouseEvent): void {
    event.stopPropagation();
    this.toggle.emit(this.symbol);
  }
  openAssetPage(): void {
    this.router.navigate(['/asset', this.symbol]);
  }
}
