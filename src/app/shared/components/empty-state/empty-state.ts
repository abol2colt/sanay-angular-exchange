import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.scss',
})
export class EmptyStateComponent {
  @Input() icon = '🔎';
  @Input() title = 'ارزی پیدا نشد';
  @Input() description = 'عبارت جستجو را تغییر بده یا بعداً دوباره امتحان کن.';
}
