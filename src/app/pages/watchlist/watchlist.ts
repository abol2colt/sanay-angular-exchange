import { Component, inject } from '@angular/core';
import { MarketStoreService } from '../../core/store/market-store.service';
import { CoinListComponent } from '../../shared/components/coin-list/coin-list';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state';

@Component({
  selector: 'app-watchlist',
  imports: [CoinListComponent, EmptyStateComponent],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.scss',
})
export class WatchlistComponent {
  marketStore = inject(MarketStoreService);
}
