import { ThemeService } from '../../core/services/theme.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TradingModalComponent } from '../../shared/components/trading-modal/trading-modal';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TradingModalComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayoutComponent {
  private themeService = inject(ThemeService);

  isDarkMode = this.themeService.isDarkMode;

  toggleTheme(): void {
    this.themeService.toggle();
  }
}
