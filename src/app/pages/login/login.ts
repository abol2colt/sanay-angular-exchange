import { Component, signal, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  private authService = inject(AuthService);

  // سیگنال برای جابه‌جایی بین حالت ورود و ثبت‌نام
  isLoginMode = signal(true);

  // مدل‌های داده برای فرم
  email = '';
  password = '';

  toggleMode() {
    this.isLoginMode.update((val) => !val);
  }
  handleAuth() {
    if (!this.email) {
      alert('لطفاً ایمیل یا موبایل را وارد کنید.');
      return;
    }

    if (this.isLoginMode()) {
      this.authService.login(this.email, this.password);
    } else {
      this.authService.signup(this.email, this.password);
    }
  }
}
