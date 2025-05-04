import { Injectable } from '@angular/core';
import { scheduleData } from '../../model/schedule-data';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  getSchedulesByDoctor(doctorName: string): scheduleData[] {
    const data = localStorage.getItem(`doctor_schedule_${doctorName}`);
    return data ? JSON.parse(data) : [];
  }

  saveSchedulesByDoctor(doctorName: string, schedules: scheduleData[]): void {
    localStorage.setItem(`doctor_schedule_${doctorName}`, JSON.stringify(schedules));
  }

  getAllSchedule(): scheduleData[] {
    const allSchedules: scheduleData[] = [];

    // Loop through all keys to collect all doctor schedules
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('doctor_schedule_')) {
        const schedules = JSON.parse(localStorage.getItem(key) || '[]');
        allSchedules.push(...schedules);
      }
    }

    return allSchedules;
  }

  addSchedule(schedule: scheduleData): void {
    const schedules = this.getSchedulesByDoctor(schedule.name);
    schedules.push(schedule);
    this.saveSchedulesByDoctor(schedule.name, schedules);
  }

  updateSchedule(updatedSchedule: scheduleData): void {
    const schedules = this.getSchedulesByDoctor(updatedSchedule.name);
    const index = schedules.findIndex(s => s.scheduleId === updatedSchedule.scheduleId);

    if (index !== -1) {
      schedules[index] = updatedSchedule;
      this.saveSchedulesByDoctor(updatedSchedule.name, schedules);
    }
  }

  deleteSchedule(toDelete: scheduleData): void {
    const schedules = this.getSchedulesByDoctor(toDelete.name);
    const updated = schedules.filter(s => s.scheduleId !== toDelete.scheduleId);
    this.saveSchedulesByDoctor(toDelete.name, updated);
  }
}
