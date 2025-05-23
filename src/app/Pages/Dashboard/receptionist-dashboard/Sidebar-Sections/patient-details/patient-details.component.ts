import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Patient } from '../../../../../model/patient-data';
import { PatientService } from '../../../../../Services/Patient/patient.service';

@Component({
  selector: 'app-patient-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.css'
})
export class PatientDetailsComponent implements OnInit{
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
      patient_email: [''],
      patient_contact_no: ['', Validators.required],
      // patient_email: ['none'],
      // patient_address: ['none'],
      // patient_address: [''],
      // imageUrl: [''],
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
    
    alert("Product Updated Successfully");
    this.patientService.updatePatient(updatedPatient);
    this.editingPatientId = null;
    this.patientForm.reset();
    this.loadPatients();
  }

  deletePatient(id: number): void {
    this.patientService.deletePatient(id);
    alert(`Product ${id} deleted Successfully`);
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
        patient.patient_name.toLowerCase().includes(query)
    );
  }
}
