import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarketDataLoaderService } from './core/services/market-data-loader.service';
import { ConnectionOrchestrationService } from './core/services/connection-orchestration.service';
import { ThemeService } from './core/services/theme.service';

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
  private themeService = inject(ThemeService);

  constructor() {
    this.marketDataLoader.loadOnce();
    this.themeService.initialize();

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.connectionOrchestration.start();

    window.addEventListener('beforeunload', () => {
      this.connectionOrchestration.stop();
    });
  }
}
