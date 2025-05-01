import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-receptionist-dashboard-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './receptionist-dashboard-navbar.component.html',
  styleUrl: './receptionist-dashboard-navbar.component.css'
})
export class ReceptionistDashboardNavbarComponent {
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
