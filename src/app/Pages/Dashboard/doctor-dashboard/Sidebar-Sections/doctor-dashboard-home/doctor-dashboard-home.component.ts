import { Component } from '@angular/core';
import { AuthenticationService } from '../../../../../Services/Authentication/authentication-service.service';

@Component({
  selector: 'app-doctor-dashboard-home',
  standalone: true,
  imports: [],
  templateUrl: './doctor-dashboard-home.component.html',
  styleUrl: './doctor-dashboard-home.component.css'
})
export class DoctorDashboardHomeComponent {
constructor(private authService: AuthenticationService){}

name =  this.authService.getCurrentUser()?.firstName;
}
