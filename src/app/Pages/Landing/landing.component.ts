import { Component } from '@angular/core';
import { LandingNavComponent } from '../../Components/navbars/landing-nav/landing-nav.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandingNavComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
