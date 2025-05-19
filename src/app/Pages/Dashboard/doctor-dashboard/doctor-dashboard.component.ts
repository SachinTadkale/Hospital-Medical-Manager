import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoctorDashboardNavbarComponent } from './doctor-dashboard-navbar/doctor-dashboard-navbar.component';
import { DoctorDashboardSidebarComponent } from './doctor-dashboard-sidebar/doctor-dashboard-sidebar.component';
import { AuthenticationService } from '../../../Services/Authentication/authentication-service.service';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    DoctorDashboardNavbarComponent,
    DoctorDashboardSidebarComponent,
  ],
  templateUrl: './doctor-dashboard.component.html',
  styleUrl: './doctor-dashboard.component.css',
})
export class DoctorDashboardComponent {
  constructor(private authService: AuthenticationService){}
  
  name =  this.authService.getCurrentUser()?.firstName;
}
