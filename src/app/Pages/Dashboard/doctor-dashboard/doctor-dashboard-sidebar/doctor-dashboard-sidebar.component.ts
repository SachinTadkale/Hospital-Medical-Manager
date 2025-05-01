import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './doctor-dashboard-sidebar.component.html',
  styleUrl: './doctor-dashboard-sidebar.component.css',
})
export class DoctorDashboardSidebarComponent {
  activeItem: string = 'Dashboard'; // Stores the active menu item

  constructor(private router: Router) {}

  onItemClick(item: string): void {
    switch (item) {
      case 'Dashboard':
        this.router.navigate(['doctor-dashboard/doctor-dashboard-home']);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Patients':
        this.router.navigate(['doctor-dashboard/patients']);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Patients Reports':
        this.router.navigate(['doctor-dashboard/patient-reports']);
        this.activeItem = item; // Set the clicked item as active
        break;
      default:
        console.log('Unknown menu item clicked.');
    }
  }
}
