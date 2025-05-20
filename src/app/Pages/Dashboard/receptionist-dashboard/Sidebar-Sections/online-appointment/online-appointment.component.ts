import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PatientAppointment } from '../../../../../model/PatientAppointment';
import { PatientService } from '../../../../../Services/Patient/patient.service';

@Component({
  selector: 'app-online-appointment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './online-appointment.component.html',
  styleUrls: ['./online-appointment.component.css']  // ✅ FIXED
})
export class OnlineAppointmentComponent implements OnInit {

  patientAppointments: PatientAppointment[] = [];  // ✅ initialized empty

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {

    this.getAppointment();
    
  }

  getAppointment(){
    this.patientService.getAllAppointments().subscribe({
      next: (data: PatientAppointment[]) => {
        this.patientAppointments = data;
      },
      error: (error) => {
        console.error('Error fetching appointments:', error);      }
    });
  }

}
