// patient-reports.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for ngModel
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms'; // Needed for ngModel
import { PatientService } from '../../../../../Services/Patient/patient.service';
import { Patient } from '../../../../../model/patient-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-reports',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink], // Import the necessary modules for ngModel
  templateUrl: './patient-reports.component.html',
  styleUrls: ['./patient-reports.component.css'],
})
export class PatientReportsComponent implements OnInit {
  patients: Patient[] = [];
//  filteredPatients: Patient[] = [];
  // searchQuery: string = '';
  constructor(
    private patientService: PatientService
  ) {}
  ngOnInit(): void {
    this.loadPatients();
  }
  loadPatients(): void {
    this.patients = this.patientService.getAllPatients();
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

  downloadFile(patientId: number, patientName: string): void {
    const fileData = this.getPatientFile(patientId);

    if (!fileData) {
      alert(`❌ No file found for patient ID ${patientId}`);
      return;
    }

    const link = document.createElement('a');
    link.href = fileData;
    link.download = patientName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  viewFile(patientId: number): void {
    const fileData = this.getPatientFile(patientId);
  
    if (!fileData) {
      alert(`❌ No file found for patient ID ${patientId}`);
      return;
    }
  
    const fileType = fileData.split(';')[0];
  
    const newTab = window.open();
    if (newTab) {
      newTab.document.write(`
        <html>
          <head>
            <title>View Document</title>
            <style>
              body {
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: #f5f5f5;
              }
              img, embed {
                width: 50vw;
                height: 95vh;
                box-shadow: 0 0 10px rgba(0,0,0,0.2);
                border-radius: 8px;
              }
            </style>
          </head>
          <body>
            ${
              fileType.includes('image')
                ? `<img src="${fileData}" alt="Document" />`
                : `<embed src="${fileData}" type="application/pdf" />`
            }
          </body>
        </html>
      `);
      newTab.document.close();
    } else {
      alert('❌ Failed to open new tab. Please allow pop-ups.');
    }
  }
  
}
