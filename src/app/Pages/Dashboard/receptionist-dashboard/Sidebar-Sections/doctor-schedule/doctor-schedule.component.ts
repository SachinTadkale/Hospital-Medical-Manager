import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { scheduleData } from '../../../../../model/schedule-data';
import { ScheduleService } from '../../../../../Services/Schedule/schedule.service';

@Component({
  selector: 'app-doctor-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-schedule.component.html',
  styleUrl: './doctor-schedule.component.css'
})
export class DoctorScheduleComponent implements OnInit{
  schedules:scheduleData[] = [];
  constructor(private scheduleService:ScheduleService){}
  ngOnInit(): void {
  this.loadSchedules();
  }
  loadSchedules():void{
    this.schedules = this.scheduleService.getAllSchedule();
  }
}
