import { Component, inject } from '@angular/core';
import { MarketStoreService } from '../../../core/store/market-store.service';

@Component({
  selector: 'app-connection-badge',
  templateUrl: './connection-badge.html',
  styleUrl: './connection-badge.scss',
})
export class ConnectionBadgeComponent {
  private marketStore = inject(MarketStoreService);

  connectionStatus = this.marketStore.connectionStatus;

  getProviderLabel(): string {
    const provider = this.connectionStatus().provider;

    if (!provider || provider === 'None') {
      return 'No Socket';
    }

    return provider;
  }

  getPhaseLabel(): string {
    switch (this.connectionStatus().phase) {
      case 'live':
        return 'Live';
      case 'connecting':
        return 'Connecting';
      case 'degraded':
        return 'Degraded';
      case 'error':
        return 'Error';
      default:
        return 'Idle';
    }
  }

  getWrapperClasses(): string {
    const base =
      'inline-flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-bold transition-all';

    switch (this.connectionStatus().phase) {
      case 'live':
        return `${base} border-green-200 bg-green-50 text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-300`;
      case 'connecting':
        return `${base} border-yellow-200 bg-yellow-50 text-yellow-700 dark:border-yellow-500/20 dark:bg-yellow-500/10 dark:text-yellow-300`;
      case 'degraded':
      case 'error':
        return `${base} border-red-200 bg-red-50 text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300`;
      default:
        return `${base} border-gray-200 bg-gray-50 text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300`;
    }
  }

  getDotClasses(): string {
    const base = 'h-2.5 w-2.5 rounded-full';

    switch (this.connectionStatus().phase) {
      case 'live':
        return `${base} bg-green-500`;
      case 'connecting':
        return `${base} bg-yellow-400 animate-pulse`;
      case 'degraded':
      case 'error':
        return `${base} bg-red-500`;
      default:
        return `${base} bg-gray-400`;
    }
  }
}
