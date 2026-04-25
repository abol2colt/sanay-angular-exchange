import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Coin } from '../../../../core/models/coin.model';

@Component({
  selector: 'app-home-market-preview-section',
  imports: [RouterLink],
  templateUrl: './home-market-preview-section.html',
  styleUrl: './home-market-preview-section.scss',
})
export class HomeMarketPreviewSectionComponent {
  @Input() coins: Coin[] = [];

  getChangeClasses(change24h: number): string {
    return change24h >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
  }

  formatPrice(value: number): string {
    return Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 6,
    });
  }

  formatChange(value: number): string {
    return `${value >= 0 ? '▲' : '▼'} ${Math.abs(value).toFixed(2)}%`;
  }
}
