import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthRequest } from '../../../model/AuthRequest';
import { AuthService } from '../../../Services/LoginReg/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {




  loginData: AuthRequest = {
    username: '',
    password: ''
  };


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login() {

    if (this.loginData.username && this.loginData.password) {
      this.authService.login(this.loginData).subscribe({
        next: (res: string) => {
          alert('Login Successful!');
          localStorage.setItem('ManagerToken', res); // `res` is already the token string
        
          this.fetchUser();
        },
        error: (error) => {
          console.error('Login failed:', error);
          alert('Invalid credentials, please try again.');
        }
      });

    }
    else {
      alert('Please fill in all fields.');
    }
  }

   fetchUser(): void {
    this.authService.getUserById().subscribe({
      next: (data) => {
        
        localStorage.setItem('firstName',data.firstName);

      switch(data.role){
        case "DOCTOR": 
          this.router.navigate(['/doctor-dashboard']);
        break;
        
        case "RECEPTIONIST":
          this.router.navigate(['/receptionist-dashboard']);
        break;
        
        default:
          console.log("Invalid role");
        break;

      }

      },
      error: (err) => {
      console.log("fail to get user "+err);
      }
    });
  }
}
