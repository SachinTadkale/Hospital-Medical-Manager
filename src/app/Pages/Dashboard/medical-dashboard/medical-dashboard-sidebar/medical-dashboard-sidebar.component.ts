import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-dashboard-sidebar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './medical-dashboard-sidebar.component.html',
  styleUrl: './medical-dashboard-sidebar.component.css',
})
export class MedicalDashboardSidebarComponent {
  activeItem: string = 'Dashboard'; // Stores the active menu item

  constructor(private router: Router) {}

  onItemClick(item: string): void {
    switch (item) {
      case 'Dashboard':
        this.router.navigate(['medical-dashboard/medical-dashboard-home']);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Manage Products':
        this.router.navigate(['medical-dashboard/medical-manage-products']);
        this.activeItem = item; // Set the clicked item as active
        break;
      case 'Billing Management':
        this.router.navigate(['medical-dashboard/medical-billing']);
        this.activeItem = item; // Set the clicked item as active
        break;
      default:
        console.log('Unknown menu item clicked.');
    }
  }
}
