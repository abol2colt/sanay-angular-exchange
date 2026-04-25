import { Component } from '@angular/core';

@Component({
  selector: 'app-home-features-section',
  templateUrl: './home-features-section.html',
  styleUrl: './home-features-section.scss',
})
export class HomeFeaturesSectionComponent {
  features = [
    {
      eyebrow: 'Security',
      title: 'امنیت چندلایه',
      text: 'ساختار محصول طوری چیده شده که جریان‌ها شفاف، وضعیت‌ها کنترل‌شده و رفتار سیستم قابل‌فهم بماند.',
    },
    {
      eyebrow: 'Realtime',
      title: 'داده زنده و fallback',
      text: 'بین بایننس، نوبیتکس و موتور نمایشی مسیر جایگزین داریم تا تجربه بازار با خطا یا قطعی کاملاً متوقف نشود.',
    },
    {
      eyebrow: 'Watchlist',
      title: 'رصد سریع دارایی‌ها',
      text: 'کاربر می‌تواند دارایی‌های مهم را جدا کند و خیلی سریع‌تر روی بازار و صفحه دارایی خودش تمرکز کند.',
    },
    {
      eyebrow: 'Asset Flow',
      title: 'جریان شفاف محصول',
      text: 'از لیست بازار تا صفحه دارایی و پنجره معامله نمایشی، مسیرها روشن و قابل‌ردیابی نگه داشته شده‌اند.',
    },
  ];

  summaryItems = ['اتصال پایدار', 'وضعیت امن', 'جریان شفاف'];
}
