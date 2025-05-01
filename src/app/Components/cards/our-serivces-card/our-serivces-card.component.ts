import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-serivces-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-serivces-card.component.html',
  styleUrl: './our-serivces-card.component.css',
})
export class OurSerivcesCardComponent {
  Services: any[] = [
    {
      ImageUrl: 'assets/card Images/img-1.jpg',
      title: 'Dental treatments',
      content: `We offer complete dental care including cleaning, fillings, braces, and
        smile makeovers.`,
    },
    {
      ImageUrl: 'assets/card Images/img-2.jpg',
      title: 'Bones treatments',
      content: `We offer specialized care for fractures, joint issues, and bone-related surgeries.`,
    },
    {
      ImageUrl: 'assets/card Images/img-3.jpg',
      title: 'Diagnosis',
      content: `Advanced diagnostic services including lab tests, X-rays, and imaging.`,
    },
    {
      ImageUrl: 'assets/card Images/img-4.jpg',
      title: 'Cardiology',
      content: `Expert care for heart conditions with advanced diagnostics and treatments.`,
    },
    {
      ImageUrl: 'assets/card Images/img-5.jpg',
      title: 'Surgery',
      content: `Safe and specialized surgical treatments for various conditions.`,
    },
    {
      ImageUrl: 'assets/card Images/img-6.jpg',
      title: 'Eye care',
      content: `Complete eye care services from vision tests to advanced treatments and surgeries.`,
    },
  ];
}
