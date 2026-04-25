import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MarketStoreService } from '../../core/store/market-store.service';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state';
import { formatPrice, getChangeMeta } from '../../shared/utils/price-helpers';
import { TradingModalService } from '../../core/services/trading-modal.service';

const ASSET_DESCRIPTIONS: Record<string, string> = {
  btc: 'بیت‌کوین اولین و شناخته‌شده‌ترین ارز دیجیتال بازار است و معمولاً نقش رهبر بازار را دارد.',
  eth: 'اتریوم زیرساخت اصلی قراردادهای هوشمند و تعداد زیادی از پروژه‌های وب ۳ است.',
  bnb: 'بی‌ان‌بی ارز بومی اکوسیستم بایننس است و در پرداخت کارمزد و سرویس‌های مختلف کاربرد دارد.',
  sol: 'سولانا به خاطر سرعت بالا و کارمزد پایین شناخته می‌شود و در پروژه‌های DeFi و NFT محبوب است.',
  xrp: 'ریپل بیشتر با هدف انتقال سریع ارزش و پرداخت‌های بین‌المللی شناخته می‌شود.',
  ada: 'کاردانو روی توسعه مرحله‌ای و پژوهش‌محور تمرکز دارد.',
  doge: 'دوج‌کوین از یک میم‌کوین شروع شد ولی به خاطر جامعه کاربری بزرگش همچنان محبوب است.',
  ton: 'تون‌کوین به اکوسیستم TON مربوط است و روی سرعت و مقیاس‌پذیری تمرکز دارد.',
  trx: 'ترون شبکه‌ای است که روی انتقال سریع دارایی و اپلیکیشن‌های غیرمتمرکز کار می‌کند.',
  avax: 'آوالانچ برای ساخت اپلیکیشن‌های غیرمتمرکز و ساب‌نت‌ها شناخته می‌شود.',
};

@Component({
  selector: 'app-asset',
  imports: [RouterLink, EmptyStateComponent],
  templateUrl: './asset.html',
  styleUrl: './asset.scss',
})
export class AssetComponent {
  private route = inject(ActivatedRoute);
  private tradingModal = inject(TradingModalService);
  marketStore = inject(MarketStoreService);

  symbol = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('symbol')?.trim().toLowerCase() ?? '')),
    { initialValue: '' },
  );

  coin = computed(() => {
    const symbol = this.symbol();

    if (!symbol) {
      return null;
    }

    return this.marketStore.getCoinBySymbol(symbol);
  });

  displaySymbol = computed(() => {
    return this.coin()?.symbol.toUpperCase() || this.symbol().toUpperCase();
  });

  changeMeta = computed(() => {
    return getChangeMeta(this.coin()?.change24h ?? 0);
  });

  description = computed(() => {
    return ASSET_DESCRIPTIONS[this.symbol()] || 'اطلاعات تکمیلی این دارایی هنوز ثبت نشده است.';
  });

  infoCards = computed(() => {
    return [
      {
        label: 'منبع داده',
        value: this.marketStore.activeProvider() || 'None',
      },
      {
        label: 'وضعیت اتصال',
        value: this.marketStore.connectionStatus().phase,
      },
      {
        label: 'نماد',
        value: this.displaySymbol(),
      },
      {
        label: 'تاریخچه قیمت',
        value: 'در مرحله زنده اضافه می‌شود',
      },
    ];
  });

  formatPrice(value: number): string {
    return formatPrice(value);
  }

  openTradeModal(): void {
    const symbol = this.symbol();

    if (!symbol || !this.coin()) {
      return;
    }

    this.tradingModal.open(symbol);
  }
}
