import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { userData } from '../../../model/user-data';
import { AuthenticationService } from '../../../Services/Authentication/authentication-service.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { VerifyOtpService } from '../../../Services/verifyOtp/verify-otp.service';
import { AuthService } from '../../../Services/LoginReg/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
   isLoading = false;

  otpSent: boolean = false;
  otp: string = '';
  emailVerified: boolean = false;

 

  user: userData = {

   firstName:'',
  lastName :'',
  age : 0,
  address :'',
  username: '',
  password : '',
  role: ''

  };

  constructor(
    private authService: AuthService, private http: HttpClient,
    private router: Router, private otpService: VerifyOtpService
  ) { }



  sendOtp() {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!this.user.username) {
      alert('Please enter your email.');
      return;
    }

    if (!emailPattern.test(this.user.username)) {
      alert('Email format is invalid.');
      return;
    }
    this.isLoading = true;
    this.otpService.sendOtp(this.user.username).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.otpSent = true;
        alert(response.message);
      },
      error: () => {
        alert('Failed to send OTP.');
        this.isLoading=false;
      }
    });
  }


  verifyOtp() {
    if (!this.otp) {
      alert('OTP is required.');
      return;
    }
    this.isLoading = true;
    this.otpService.verifyOtp(this.user.username, this.otp).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.emailVerified = true;
        alert(response.message);

      },
      error: () => {
        alert('Invalid OTP.');
      }
    });
  }


  onSubmit() {


    if(
      this.user.firstName && this.user.lastName && this.user.password && this.user.username
    ){
      

    this.authService.register(this.user).subscribe({
      next: (response) => {
        alert(response.message);
        this.router.navigate(['/login']);


      },
      error: (error) => {
        console.error('Error during signup:', error);
        alert(error.error?.message || 'Signup failed.');
      },
    });
  }else{

    alert('please fill required fields ');
  }
  }
}
