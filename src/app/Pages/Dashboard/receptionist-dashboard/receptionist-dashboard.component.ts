import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceptionistDashboardSidebarComponent } from './receptionist-dashboard-sidebar/receptionist-dashboard-sidebar.component';
import { ReceptionistDashboardNavbarComponent } from './receptionist-dashboard-navbar/receptionist-dashboard-navbar.component';

@Component({
  selector: 'app-receptionist-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    ReceptionistDashboardSidebarComponent,
    ReceptionistDashboardNavbarComponent,
  ],
  templateUrl: './receptionist-dashboard.component.html',
  styleUrl: './receptionist-dashboard.component.css',
})
export class ReceptionistDashboardComponent {}
