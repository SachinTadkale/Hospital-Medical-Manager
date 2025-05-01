import { Component } from '@angular/core';
import { Patient } from '../../../../../model/patient-data';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../../../../Services/Patient/patient.service';
@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css',
})
export class PatientsComponent {
  patientForm!: FormGroup;
  patients: Patient[] = [];
  filteredPatients: Patient[] = [];
  editingPatientId: number | null = null;
  searchQuery: string = '';

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      patient_name: ['', Validators.required],
      patient_age: ['', Validators.required],
      patient_disease: ['', Validators.required],
      patient_description: [''],
      patient_address: [''],
      imageUrl: [''],
    });

    this.loadPatients();
  }

  loadPatients(): void {
    this.patients = this.patientService.getAllPatients();
    this.filteredPatients = [...this.patients];
  }
  getNextPatientId(): number {
    const patients = this.patientService.getAllPatients();
    if (patients.length === 0) return 1;
    const maxId = Math.max(...patients.map((p) => +p.patient_id));
    return maxId + 1;
  }
  onSubmit(): void {
    if (this.patientForm.invalid) return;

    const newPatient: Patient = {
      ...this.patientForm.value,
      patient_id: this.getNextPatientId().toString(),
    };
    alert("Patient Added Successfully")
    this.patientService.addPatient(newPatient);
    this.patientForm.reset();
    this.loadPatients();
  }

  editPatient(patient: Patient): void {
    this.editingPatientId = patient.patient_id;
    this.patientForm.patchValue({ ...patient });
  }

  updatePatient(): void {
    if (!this.editingPatientId) return;

    const updatedPatient: Patient = {
      ...this.patientForm.value,
      patient_id: this.editingPatientId,
    };

    this.patientService.updatePatient(updatedPatient);
    this.editingPatientId = null;
    this.patientForm.reset();
    this.loadPatients();
  }

  deletePatient(id: number): void {
    this.patientService.deletePatient(id);
    this.loadPatients();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.patientForm.patchValue({ imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  }

  filterPatients(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredPatients = this.patients.filter(
      (patient) =>
        patient.patient_name.toLowerCase().includes(query) ||
        patient.patient_disease.toLowerCase().includes(query)
    );
  }
}
