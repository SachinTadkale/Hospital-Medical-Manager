import { Component, OnInit } from '@angular/core';
import { scheduleData } from '../../../../../model/schedule-data';
import { DoctorWithSchedule } from '../../../../../model/DoctorWithSchedule';
import { ScheduleService } from '../../../../../Services/Schedule/schedule.service';
import { AuthenticationService } from '../../../../../Services/Authentication/authentication-service.service';
import { userData } from '../../../../../model/user-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css'],
})
export class DoctorScheduleComponent implements OnInit {
  doctors: DoctorWithSchedule[] = [];

  constructor(
    private scheduleService: ScheduleService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loadDoctors();
  }

  loadDoctors(): void {
    const today = new Date();
    const allDoctors: userData[] = this.authService.getAllDoctors();

    this.doctors = allDoctors.map((doctor: userData) => {
      const doctorKey = `doctor_schedule_${doctor.full_name}`;
      const storedLeaves = localStorage.getItem(doctorKey);
    
      let availability: 'Available' | 'Unavailable' = 'Available';
      let alternate: string = '';
      let emergencyContact: string = '';
      let startDate: Date | null = null;
      let endDate: Date | null = null;
    
      if (storedLeaves) {
        const leaveList: scheduleData[] = JSON.parse(storedLeaves);
    
        for (const leave of leaveList) {
          const leaveStart = new Date(leave.startDate);
          const leaveEnd = new Date(leave.endDate);
    
          if (today >= leaveStart && today <= leaveEnd) {
            availability = 'Unavailable';
            alternate = leave.alternate;
            emergencyContact = leave.emergencyContact;
            startDate = leaveStart;
            endDate = leaveEnd;
            break;
          }
        }
      }
    
      return {
        ...doctor,
        availability,
        alternate,
        emergencyContact,
        startDate,
        endDate
      };
    });
    
  }
}
