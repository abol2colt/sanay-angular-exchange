import { Injectable, computed, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  // کلیدهای ذخیره‌سازی
  private readonly USERS_DB_KEY = 'sanay_users_db';
  private readonly ACTIVE_USER_KEY = 'sanay_active_user';

  // سیگنال‌ها
  private userState = signal<{ email: string } | null>(null);

  // متغیرهای خواندنی برای کامپوننت‌ها
  readonly user = this.userState.asReadonly();
  readonly isAuthenticated = computed(() => this.userState() !== null);

  constructor() {
    this.loadInitialState();
  }

  private loadInitialState(): void {
    if (isPlatformBrowser(this.platformId)) {
      // لود کردن کاربر فعال
      const activeUser = localStorage.getItem(this.ACTIVE_USER_KEY);
      if (activeUser) {
        try {
          this.userState.set(JSON.parse(activeUser));
        } catch {
          this.logout();
        }
      }
    }
  }

  // متد ثبت نام
  signup(email: string, password?: string): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;

    let users: any[] = [];
    const storedUsers = localStorage.getItem(this.USERS_DB_KEY);
    if (storedUsers) {
      users = JSON.parse(storedUsers);
    }

    if (users.find((u) => u.email === email)) {
      alert('این ایمیل قبلاً ثبت شده است!');
      return false;
    }

    users.push({ email, password });
    localStorage.setItem(this.USERS_DB_KEY, JSON.stringify(users));

    // ورود خودکار بعد از ثبت‌نام
    return this.login(email, password);
  }

  // متد لاگین
  login(email: string, password?: string): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;

    let users: any[] = [];
    const storedUsers = localStorage.getItem(this.USERS_DB_KEY);
    if (storedUsers) {
      users = JSON.parse(storedUsers);
    }

    const userExists = users.find((u) => u.email === email);

    if (userExists) {
      const userData = { email };
      this.userState.set(userData);
      localStorage.setItem(this.ACTIVE_USER_KEY, JSON.stringify(userData));
      this.router.navigate(['/home']); // هدایت به خانه
      return true;
    } else {
      alert('کاربری با این ایمیل یافت نشد. لطفاً ثبت‌نام کنید.');
      return false;
    }
  }

  logout(): void {
    this.userState.set(null);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.ACTIVE_USER_KEY);
    }
    this.router.navigate(['/login']);
  }
}
