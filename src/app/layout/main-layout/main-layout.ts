import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayoutComponent {
  private platformId = inject(PLATFORM_ID);

  isDarkMode(): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return true;
    }

    return document.documentElement.classList.contains('dark');
  }

  toggleTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
}
