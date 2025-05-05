export interface Patient {
  patient_id: number;
  patient_name: string;
  patient_email:string;
  patient_contact_no:string;
  patient_address: string;

  patient_age?: number;
  patient_disease?: string;
  patient_description?: string;
  imageUrl?: string;

  uploadedFiles?: UploadedFile[]; // Optional: to store metadata or content
}

export interface UploadedFile {
  name: string;
  type: string;
  base64Data: string;
  uploadedAt: Date;
}
