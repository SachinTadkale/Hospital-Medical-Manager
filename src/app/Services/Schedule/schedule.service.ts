import { Injectable } from '@angular/core';
import { scheduleData } from '../../model/schedule-data';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private localeStorageKey = 'Schedule';

  getAllSchedule(): scheduleData[] {
    const data = localStorage.getItem(this.localeStorageKey);
    return data ? JSON.parse(data) : [];
  }
  saveSchedule(scheduleDetails: scheduleData[]) {
    localStorage.setItem(
      this.localeStorageKey,
      JSON.stringify(scheduleDetails)
    );
  }

  addSchedule(schedule: scheduleData) {
    const schedules = this.getAllSchedule();
    schedules.push(schedule);
    this.saveSchedule(schedules);
  }
  updateSchedule(updateSchedule: scheduleData) {
    const schedules = this.getAllSchedule().map((s) =>
      s.scheduleId === updateSchedule.scheduleId ? updateSchedule : s
    );
    this.saveSchedule(schedules);
  }
  deleteSchedule(deleteSchedule: scheduleData) {
    const schedules = this.getAllSchedule().filter(
      (s) => s.scheduleId !== deleteSchedule.scheduleId
    );
    this.saveSchedule(schedules);
  }
}
