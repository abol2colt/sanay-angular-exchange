import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout';
import { HomeComponent } from './pages/home/home';
import { MarketComponent } from './pages/market/market';
import { WatchlistComponent } from './pages/watchlist/watchlist';
import { AssetComponent } from './pages/asset/asset';
import { LoginComponent } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'market', component: MarketComponent },
      { path: 'watchlist', component: WatchlistComponent },
      { path: 'asset/:symbol', component: AssetComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
