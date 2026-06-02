import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

interface StoredUser {
  email: string;
  password?: string;
}

interface AuthResult {
  success: boolean;
  message?: string;
}

const USERS_DB_KEY = 'sanay_users_db';
const ACTIVE_USER_KEY = 'sanay_active_user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private userState = signal<StoredUser | null>(null);

  readonly user = this.userState.asReadonly();
  readonly isAuthenticated = computed(() => this.userState() !== null);

  constructor() {
    this.loadInitialState();
  }

  signup(email: string, password?: string): AuthResult {
    if (!isPlatformBrowser(this.platformId)) {
      return { success: false, message: 'Authentication is available only in the browser.' };
    }

    const normalizedEmail = this.normalizeEmail(email);
    const users = this.readStoredUsers();

    if (users.some((user) => this.normalizeEmail(user.email) === normalizedEmail)) {
      return { success: false, message: 'این ایمیل قبلاً ثبت شده است.' };
    }

    users.push({ email: normalizedEmail, password });
    localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));

    return this.login(normalizedEmail, password);
  }

  login(email: string, password?: string): AuthResult {
    if (!isPlatformBrowser(this.platformId)) {
      return { success: false, message: 'Authentication is available only in the browser.' };
    }

    const normalizedEmail = this.normalizeEmail(email);
    const users = this.readStoredUsers();
    const userExists = users.some(
      (user) => this.normalizeEmail(user.email) === normalizedEmail && user.password === password,
    );

    if (!userExists) {
      return { success: false, message: 'کاربری با این مشخصات یافت نشد.' };
    }

    const userData: StoredUser = { email: normalizedEmail };
    this.userState.set(userData);
    localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(userData));
    void this.router.navigate(['/home']);

    return { success: true };
  }

  logout(): void {
    this.userState.set(null);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(ACTIVE_USER_KEY);
    }

    void this.router.navigate(['/login']);
  }

  private loadInitialState(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const activeUser = localStorage.getItem(ACTIVE_USER_KEY);

    if (!activeUser) {
      return;
    }

    try {
      const parsedUser = JSON.parse(activeUser) as Partial<StoredUser>;

      if (parsedUser.email) {
        this.userState.set({ email: this.normalizeEmail(parsedUser.email) });
      }
    } catch {
      this.logout();
    }
  }

  private readStoredUsers(): StoredUser[] {
    const storedUsers = localStorage.getItem(USERS_DB_KEY);

    if (!storedUsers) {
      return [];
    }

    try {
      const parsedUsers = JSON.parse(storedUsers) as StoredUser[];
      return Array.isArray(parsedUsers) ? parsedUsers.filter((user) => Boolean(user.email)) : [];
    } catch {
      localStorage.removeItem(USERS_DB_KEY);
      return [];
    }
  }

  private normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
  }
}
