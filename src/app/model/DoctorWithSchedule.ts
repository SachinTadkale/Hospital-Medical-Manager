// src/app/model/DoctorWithSchedule.ts
import { userData } from './user-data';

export interface DoctorWithSchedule extends userData {
  availability: 'Available' | 'Unavailable';
  alternate?: string;
  emergencyContact?: string;
  startDate?: Date | null;
  endDate?: Date | null;
}
