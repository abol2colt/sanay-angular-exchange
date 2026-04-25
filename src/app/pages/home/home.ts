import { Component, computed, inject } from '@angular/core';
import { HomeHeroSectionComponent } from './sections/home-hero-section/home-hero-section';
import { HomeFeaturesSectionComponent } from './sections/home-features-section/home-features-section';
import { HomeMarketPreviewSectionComponent } from './sections/home-market-preview-section/home-market-preview-section';
import { MarketStoreService } from '../../core/store/market-store.service';
import { Coin } from '../../core/models/coin.model';

@Component({
  selector: 'app-home',
  imports: [
    HomeHeroSectionComponent,
    HomeFeaturesSectionComponent,
    HomeMarketPreviewSectionComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  private marketStore = inject(MarketStoreService);

  private previewSymbols = ['btc', 'eth', 'sol', 'ton'];

  previewCoins = computed<Coin[]>(() =>
    this.previewSymbols
      .map((symbol) => this.marketStore.getCoinBySymbol(symbol))
      .filter((coin): coin is Coin => coin !== null),
  );
}
