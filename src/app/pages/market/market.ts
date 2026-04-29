import { Component, inject, makeStateKey } from '@angular/core';
import { MarketStoreService } from '../../core/store/market-store.service';
import { CoinListComponent } from '../../shared/components/coin-list/coin-list';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state';
import { ConnectionBadgeComponent } from '../../shared/components/connection-badge/connection-badge';

@Component({
  selector: 'app-market',
  imports: [CoinListComponent, EmptyStateComponent, ConnectionBadgeComponent],
  templateUrl: './market.html',
  styleUrl: './market.scss',
})
export class MarketComponent {
  marketStore = inject(MarketStoreService);

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.marketStore.setSearchQuery(input.value);
  }

  clearSearch(): void {
    this.marketStore.setSearchQuery('');
  }

  handleToggleWatchlist(symbol: string): void {
    this.marketStore.toggleWatchlist(symbol);
  }
}
