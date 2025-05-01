import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LandingNavComponent } from '../../Components/navbars/landing-nav/landing-nav.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LandingNavComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingComponent {

}
