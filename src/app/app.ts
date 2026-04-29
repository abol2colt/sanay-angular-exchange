import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarketDataLoaderService } from './core/services/market-data-loader.service';
import { ConnectionOrchestrationService } from './core/services/connection-orchestration.service';
import { ThemeService } from './core/services/theme.service';
import { SplashComponent } from './shared/components/splash/splash';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SplashComponent],
  standalone: true,
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
