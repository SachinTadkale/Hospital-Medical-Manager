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
    private patientService: PatientService,
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

  deletePatient(id: number): void {
    this.patientService.deletePatient(id);
    this.loadPatients();
  }

  // ✅ Updated with file type and size check
  onFileSelected(event: Event, patientId: number): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
      const maxSizeInMB = 2; // 2MB limit
      const maxSizeBytes = maxSizeInMB * 1024 * 1024;

      // Validate type
      if (!allowedTypes.includes(file.type)) {
        alert('❌ Only PDF, JPEG, and PNG files are allowed.');
        return;
      }

      // Validate size
      if (file.size > maxSizeBytes) {
        alert(`❌ File is too large. Max allowed size is ${maxSizeInMB}MB.`);
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const fileData = reader.result as string;
        const storageKey = `patient_file_${patientId}`;

        try {
          localStorage.setItem(storageKey, fileData);
          alert(`✅ File uploaded successfully for patient ID ${patientId}`);
          console.log('File Data:', fileData);
        } catch (error) {
          alert('❌ Failed to upload file. Storage limit exceeded.');
          console.error('Storage Error:', error);
        }
      };

      reader.readAsDataURL(file); // Convert to base64
    }
  }

  getPatientFile(patientId: number): string | null {

    return localStorage.getItem(`patient_file_${patientId}`);
  }
}
