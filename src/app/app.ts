import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarketDataLoaderService } from './core/services/market-data-loader.service';
import { ConnectionOrchestrationService } from './core/services/connection-orchestration.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private platformId = inject(PLATFORM_ID);
  private marketDataLoader = inject(MarketDataLoaderService);
  private connectionOrchestration = inject(ConnectionOrchestrationService);

  constructor() {
    this.marketDataLoader.loadOnce();
    this.connectionOrchestration.start();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';

    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
