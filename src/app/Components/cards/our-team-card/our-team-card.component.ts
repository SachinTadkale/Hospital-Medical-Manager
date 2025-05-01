import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-team-card.component.html',
  styleUrl: './our-team-card.component.css',
})
export class OurTeamCardComponent {
  Members: any[] = [
    {
      ProfileImage: 'assets/doctor Images/john.jpg',
      name: 'John Carter',
      role: 'ceo & co-founder',
      description: `Leading the organization with a focus on innovation, quality care, and continuous growth.`,
    },
    {
      ProfileImage: 'assets/doctor Images/sophie.png',
      name: 'Sophie Moore',
      role: 'dental specialist',
      description: `Dental specialist providing expert care in oral health, smile design, and advanced treatments.`,
    },
    {
      ProfileImage: 'assets/doctor Images/matt.png',
      name: 'Matt Cannon',
      role: 'orthopedic',
      description: `Orthopedic expert specializing in bone, joint, and muscle care for a healthier, active life.`,
    },
    {
      ProfileImage: 'assets/doctor Images/andy.png',
      name: 'Andy Smith',
      role: 'brain surgeon',
      description: `Leading the organization with a focus on innovation, quality care, and continuous growth.`,
    },
    {
      ProfileImage: 'assets/doctor Images/lily.png',
      name: 'Lily Woods',
      role: 'Heart Specialist',
      description: `Leading the organization with a focus on innovation, quality care, and continuous growth.`,
    },
    {
      ProfileImage: 'assets/doctor Images/patrick.jpg',
      name: 'Patrick Meyer',
      role: 'Eye Specialist',
      description: `Leading the organization with a focus on innovation, quality care, and continuous growth.`,
    },
  ];
  defaultImage(event:any){
    event.target.src = 'assets/default.webp'
  }
}
