import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-medical-dashboard-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './medical-dashboard-navbar.component.html',
  styleUrl: './medical-dashboard-navbar.component.css'
})
export class MedicalDashboardNavbarComponent {
 storedUser = localStorage.getItem('name');
  uname: any = this.storedUser;
  constructor(private router:Router){}
  logout() {
    if (localStorage.getItem('username')) {
      localStorage.removeItem('username');
    }
  }
  profile(){
    this.router.navigate(
      [{ outlets: { primary: ['profile'], outlet2: null } }]
    );
  }
}
