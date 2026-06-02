import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
})
export class LoginComponent {
  private authService = inject(AuthService);

  isLoginMode = signal(true);
  errorMessage = signal('');

  email = '';
  password = '';

  toggleMode(): void {
    this.errorMessage.set('');
    this.isLoginMode.update((value) => !value);
  }

  handleAuth(): void {
    const email = this.email.trim();

    if (!email) {
      this.errorMessage.set('لطفاً ایمیل یا موبایل را وارد کنید.');
      return;
    }

    const result = this.isLoginMode()
      ? this.authService.login(email, this.password)
      : this.authService.signup(email, this.password);

    this.errorMessage.set(result.message ?? '');
  }
}
