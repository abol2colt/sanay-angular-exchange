import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject, signal } from '@angular/core';

const SPLASH_HOLD_MS = 3500;
const SPLASH_FADE_MS = 1000;

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [],
  templateUrl: './splash.html',
})
export class SplashComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  isVisible = signal(true);
  isFadingOut = signal(false);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('splash-active');
    }
  }

  onImageLoaded(): void {
    setTimeout(() => {
      this.isFadingOut.set(true);

      setTimeout(() => {
        this.isVisible.set(false);
        this.releasePageAnimations();
      }, SPLASH_FADE_MS);
    }, SPLASH_HOLD_MS);
  }

  private releasePageAnimations(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('splash-active');
    }
  }
}
