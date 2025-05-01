import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../../../Services/Authentication/authentication-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login(): void {
    this.message = this.authService.login(this.email, this.password);
    const role = this.authService.getCurrentUser()?.user_role;
    if (this.message === 'Login successful') {
      alert(this.message);

      switch (role) {
        case 'doctor':
          this.router.navigate(['/doctor-dashboard']);
          break;

        case 'receptionist':
          this.router.navigate(['/receptionist-dashboard']);
          break;

        case 'medical':
          this.router.navigate(['/medical-dashboard']);
          break;

        default:
          alert('Unknown role');
          break;
      }
    } else {
      alert('Invalid Credentials');
    }
  }
}
