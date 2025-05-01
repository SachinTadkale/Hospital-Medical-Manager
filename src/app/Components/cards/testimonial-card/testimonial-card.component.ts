import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.css',
})
export class TestimonialCardComponent {
  reviews: any[] = [
    {
      ImageUrl: 'assets/testimonial/img-1.jpg',
      title: 'Outstanding Care and Support',
      content:
        'Great care and attentive staff. Highly recommended for quality healthcare.',
      name: 'Emily R.',
    },
    {
      ImageUrl: 'assets/testimonial/img-2.jpg',
      title: 'Above and Beyond Service',
      content:
        'Great care and attentive staff. Highly recommended for quality healthcare.',
      name: 'John D.',
    },
    {
      ImageUrl: 'assets/testimonial/img-3.jpg',
      title: 'Exceptional Professionalism',
      content:
        'Excellent professionalism and care from start to finish. Truly outstanding service.',
      name: 'David L.',
    },
  ];
  defaultImage(event: any) {
    event.target.src = 'assets/default.png';
  }
}
