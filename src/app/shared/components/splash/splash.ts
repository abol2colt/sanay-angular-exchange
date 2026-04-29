import { Component, signal, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NgClass, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [NgClass],
  templateUrl: './splash.html',
})
export class SplashComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);

  isVisible = signal(true);
  isFadingOut = signal(false);

  ngOnInit() {
    // به محض شروع، یک کلاس به بادی می‌دهیم تا تمام انیمیشن‌ها قفل شوند
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('splash-active');
    }
  }

  onImageLoaded() {
    setTimeout(() => {
      this.isFadingOut.set(true); // شروع محو شدن

      setTimeout(() => {
        this.isVisible.set(false); // پایان کامل اینترو

        // وقتی لایه مشکی کامل رفت، قفل انیمیشن‌ها را باز می‌کنیم تا تازه شروع شوند!
        if (isPlatformBrowser(this.platformId)) {
          document.body.classList.remove('splash-active');
        }
      }, 1000);
    }, 3500);
  }
}
