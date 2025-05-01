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
      name:[this.name,Validators.required],
      domain:['',Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      alternate: ['', Validators.required],
      phone: ['+91 ', [Validators.required, Validators.pattern(phoneRegex)]],
    });

    this.loadSchedules();
  }

  loadSchedules(): void {
    this.schedules = this.scheduleService.getAllSchedule();
  }

  handleFormSubmit(): void {
    if (this.scheduleForm.invalid) return;

    const formValue = this.scheduleForm.value;
    const schedule: scheduleData = {
      scheduleId: this.selectedschedule?.scheduleId || Date.now(),
      name: formValue.name,
      domain: formValue.domain,
      startDate: formValue.startDate,
      endDate: formValue.endDate,
      alternate: formValue.alternate,
      emergencyContact: formValue.phone
    };

    if (this.selectedschedule) {
      this.updateSchedule(schedule);
    } else {
      this.addSchedule(schedule);
    }

    this.scheduleForm.reset();
    this.clearSelected();
  }

  addSchedule(newSchedule: scheduleData): void {
    this.scheduleService.addSchedule(newSchedule);
    this.loadSchedules();
  }

  updateSchedule(updateSchedule: scheduleData): void {
    this.scheduleService.updateSchedule(updateSchedule);
    this.loadSchedules();
  }

  deleteSchedule(schedule: scheduleData): void {
    this.scheduleService.deleteSchedule(schedule);
    this.loadSchedules();
  }

  selectSchedule(schedule: scheduleData): void {
    this.selectedschedule = { ...schedule };
    this.scheduleForm.patchValue({
      startDate: schedule.startDate,
      endDate: schedule.endDate,
      alternate: schedule.alternate,
      phone: schedule.emergencyContact
    });
  }

  clearSelected(): void {
    this.selectedschedule = undefined;
  }
}
