import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';

type ThemeMode = 'dark' | 'light';

const THEME_STORAGE_KEY = 'theme';
const DEFAULT_THEME: ThemeMode = 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private document = inject(DOCUMENT);
  private themeState = signal<ThemeMode>(DEFAULT_THEME);

  theme = computed(() => this.themeState());
  isDarkMode = computed(() => this.themeState() === 'dark');

  initialize(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.applyTheme(DEFAULT_THEME);
      return;
    }

    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    const theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : DEFAULT_THEME;

    this.setTheme(theme);
  }

  toggle(): void {
    const nextTheme: ThemeMode = this.themeState() === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  }

  setTheme(theme: ThemeMode): void {
    this.themeState.set(theme);
    this.applyTheme(theme);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    }
  }

  private applyTheme(theme: ThemeMode): void {
    this.document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}
