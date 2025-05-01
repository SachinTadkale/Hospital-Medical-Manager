import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MedicalDashboardNavbarComponent } from './medical-dashboard-navbar/medical-dashboard-navbar.component';
import { MedicalDashboardSidebarComponent } from './medical-dashboard-sidebar/medical-dashboard-sidebar.component';

@Component({
  selector: 'app-medical-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    MedicalDashboardNavbarComponent,
    MedicalDashboardSidebarComponent,
  ],
  templateUrl: './medical-dashboard.component.html',
  styleUrl: './medical-dashboard.component.css',
})
export class MedicalDashboardComponent {}
