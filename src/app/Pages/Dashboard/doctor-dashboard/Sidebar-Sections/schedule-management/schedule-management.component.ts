import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ScheduleService } from '../../../../../Services/Schedule/schedule.service';
import { scheduleData } from '../../../../../model/schedule-data';
import { AuthenticationService } from '../../../../../Services/Authentication/authentication-service.service';

@Component({
  selector: 'app-schedule-management',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './schedule-management.component.html',
  styleUrl: './schedule-management.component.css',
})
export class ScheduleManagementComponent implements OnInit {
  scheduleForm!: FormGroup;
  schedules: scheduleData[] = [];
  selectedschedule?: scheduleData;

  constructor(
    private fb: FormBuilder,
    private scheduleService: ScheduleService,
    private AuthService: AuthenticationService,
  ) {}

  name = this.AuthService.getCurrentUser()?.full_name;

  ngOnInit(): void {
    const phoneRegex = /^(?:\+91[-\s]?)?[6-9]\d{9}$/;
    this.scheduleForm = this.fb.group({
      name: [this.name, Validators.required],
      specialisation: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      alternate: ['',Validators.required],
      phone: ['+91 ', [Validators.required, Validators.pattern(phoneRegex)]],
    });

    this.loadSchedules();
  }

  loadSchedules(): void {
    this.schedules = this.scheduleService.getSchedulesByDoctor(this.name!);
  }

  handleFormSubmit(): void {
    if (!this.scheduleForm.valid) return;

    const formData = this.scheduleForm.value;
    const doctorId = formData.name;

    const newSchedule: scheduleData = {
      scheduleId: this.selectedschedule?.scheduleId || new Date().getTime(),
      name: formData.name,
      specialisation: formData.specialisation,
      startDate: formData.startDate,
      endDate: formData.endDate,
      alternate: formData.alternate,
      emergencyContact: formData.phone,
    };

    const existingSchedules = this.scheduleService.getSchedulesByDoctor(doctorId);

    // Check if new leave overlaps with any existing (only if it's a new one or changed date)
    const isOverlap = existingSchedules.some(s => {
      if (this.selectedschedule && s.scheduleId === this.selectedschedule.scheduleId) return false;
      const start1 = new Date(s.startDate);
      const end1 = new Date(s.endDate);
      const start2 = new Date(newSchedule.startDate);
      const end2 = new Date(newSchedule.endDate);
      return start1 <= end2 && start2 <= end1;
    });

    if (isOverlap) {
      alert('This doctor already has a leave scheduled for this period.');
      return;
    }

    if (this.selectedschedule) {
      this.scheduleService.updateSchedule(newSchedule);
      alert('Schedule updated successfully!');
    } else {
      this.scheduleService.addSchedule(newSchedule);
      alert('Doctor leave saved locally.');
    }

    this.loadSchedules();
    this.scheduleForm.reset();
    this.scheduleForm.patchValue({ name: this.name });
    this.selectedschedule = undefined;
  }

  selectSchedule(schedule: scheduleData): void {
    this.selectedschedule = { ...schedule };
    this.scheduleForm.patchValue({
      specialisation: schedule.specialisation || '',
      startDate: schedule.startDate,
      endDate: schedule.endDate,
      alternate: schedule.alternate,
      phone: schedule.emergencyContact,
    });
  }

  deleteSchedule(schedule: scheduleData): void {
    this.scheduleService.deleteSchedule(schedule);
    alert('Schedule deleted successfully!');
    this.loadSchedules();
  }

  clearSelected(): void {
    this.selectedschedule = undefined;
    this.scheduleForm.reset();
    this.scheduleForm.patchValue({ name: this.name });
  }
}
