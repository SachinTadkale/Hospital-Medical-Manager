import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { userData } from '../../../model/user-data';
import { AuthenticationService } from '../../../Services/Authentication/authentication-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  userData: userData = {
    user_role: '',
    full_name: '',
    email: '',
    password: '',
  };

  confirmPassword: string = '';
  message: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  signup(): void {
    if (this.userData.password !== this.confirmPassword) {
      this.message = 'Passwords does not match';
      return;
    }

    this.message = this.authService.signup(this.userData);
    if (this.message === 'Signup successful') {
      alert(this.message);
      setTimeout(() => this.router.navigate(['/login']), 1000);
    }
  }
}
