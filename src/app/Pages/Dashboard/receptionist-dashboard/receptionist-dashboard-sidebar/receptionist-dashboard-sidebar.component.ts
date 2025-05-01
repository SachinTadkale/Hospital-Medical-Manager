import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receptionist-dashboard-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './receptionist-dashboard-sidebar.component.html',
  styleUrl: './receptionist-dashboard-sidebar.component.css',
})
export class ReceptionistDashboardSidebarComponent {
  activeItem: string = 'Dashboard'; // Stores the active menu item

  constructor(private router: Router) {}

  onItemClick(item: string): void {
    switch (item) {
      case 'Dashboard':
        this.router.navigate([
          'receptionist-dashboard/receptionist-dashboard-home',
        ]);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Billing Management':
        this.router.navigate(['receptionist-dashboard/billing-management']);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Doctor Schedules':
        this.router.navigate(['receptionist-dashboard/doctor-schedule']);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Patient Details':
        this.router.navigate(['receptionist-dashboard/patient-details']);
        this.activeItem = item; // Set the clicked item as active
        break;
      default:
        console.log('Unknown menu item clicked.');
    }
  }
}
