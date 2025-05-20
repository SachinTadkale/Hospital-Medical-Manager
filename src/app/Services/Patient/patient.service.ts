import { Injectable } from '@angular/core';
import { Patient } from '../../model/patient-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userData } from '../../model/user-data';
import { Observable } from 'rxjs/internal/Observable';
import { PatientAppointment } from '../../model/PatientAppointment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

private baseUrl = 'http://localhost:8080/api'; // change to your backend URL

  constructor(private http: HttpClient) {}

  getAllAppointments(): Observable<PatientAppointment[]> {
  

    return this.http.get<PatientAppointment[]>(`${this.baseUrl}/getAppointments`);
  }



  private localStorageKey = 'patients';

  getAllPatients(): Patient[] {
    const data = localStorage.getItem(this.localStorageKey);
    return data ? JSON.parse(data) : [];
  }

  savePatients(patients: Patient[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(patients));
  }

  addPatient(patient: Patient): void {
    const patients = this.getAllPatients();
    patients.push(patient);
    this.savePatients(patients);
  }

  updatePatient(updatedPatient: Patient): void {
    const patients = this.getAllPatients().map(p =>
      p.patient_id === updatedPatient.patient_id ? updatedPatient : p
    );
    this.savePatients(patients);
  }

  deletePatient(patientId: number): void {
    const patients = this.getAllPatients().filter(p => p.patient_id !== patientId);
    this.savePatients(patients);
  }
}
