import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-dashboard-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './doctor-dashboard-navbar.component.html',
  styleUrl: './doctor-dashboard-navbar.component.css'
})
export class DoctorDashboardNavbarComponent {
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
