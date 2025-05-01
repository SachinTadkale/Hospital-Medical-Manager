// patient-reports.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Needed for ngModel
import { FormsModule } from '@angular/forms';   // Needed for ngModel
import { jsPDF } from 'jspdf'; // Import jsPDF

interface Patient {
  patient_name: string;
  patient_age: number;
  patient_category: string;
  patient_disease: string;
  patient_description: string;
  patient_address: string;
}

@Component({
  selector: 'app-patient-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Import the necessary modules for ngModel
  templateUrl: './patient-reports.component.html',
  styleUrls: ['./patient-reports.component.css']
})
export class PatientReportsComponent {
  // Assume this data is already populated or passed from the form module
  patients: Patient[] = JSON.parse(localStorage.getItem('patients') || '[]');
  
  // To store filtered patients based on search
  filteredPatients: Patient[] = [...this.patients];

  // Search term for filtering patients
  searchTerm: string = '';

  ngOnInit() {
    // Initially set the filteredPatients to all patients
    this.filteredPatients = [...this.patients];
  }

  // Method to filter the patients based on search term
  applySearch() {
    this.filteredPatients = this.patients.filter(patient =>
      patient.patient_name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      patient.patient_category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      patient.patient_disease.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Method to view detailed report of a patient
  viewReport(patient: Patient) {
    console.log('Viewing report for:', patient);

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Add title to the PDF
    doc.setFontSize(18);
    doc.text('Patient Report', 14, 20);
    
    // Add patient details to the PDF
    doc.setFontSize(12);
    doc.text(`Patient Name: ${patient.patient_name}`, 14, 30);
    doc.text(`Age: ${patient.patient_age}`, 14, 40);
    doc.text(`Category: ${patient.patient_category}`, 14, 50);
    doc.text(`Disease: ${patient.patient_disease}`, 14, 60);
    doc.text(`Description: ${patient.patient_description}`, 14, 70);
    doc.text(`Address: ${patient.patient_address}`, 14, 80);

    // Generate PDF and get it as a base64-encoded string
    const pdfData = doc.output('datauristring');

    // Create an iframe or new window to preview the PDF
    const previewWindow: Window | null = window.open('', '_blank');
    
    if (previewWindow) {
      const body = previewWindow.document.body;
      body.style.margin = '0';

      // Create an iframe element
      const iframe = previewWindow.document.createElement('iframe');
      iframe.setAttribute('src', pdfData);
      iframe.setAttribute('width', '100%');
      iframe.setAttribute('height', '100%');
      iframe.style.border = 'none';

      // Append the iframe to the body of the preview window
      body.appendChild(iframe);
    } else {
      console.error('Failed to open the preview window.');
    }
  }
}
