import { Component, Input } from '@angular/core';
import { Coin } from '../../../core/models/coin.model';
import { CoinRowComponent } from '../coin-row/coin-row';

@Component({
  selector: 'app-coin-list',
  imports: [CoinRowComponent],
  templateUrl: './coin-list.html',
  styleUrl: './coin-list.scss',
})
export class CoinListComponent {
  @Input() coins: Coin[] = [];
}
