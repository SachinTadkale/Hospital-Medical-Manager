import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class VerifyOtpService {

   private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

   sendOtp(email: string): Observable<any> {
    const params = new HttpParams().set('email', email);
    return this.http.post(`${this.baseUrl}/sendOtp`, null, { params });
  }

  verifyOtp(email: string, otp: string): Observable<any> {
    const params = new HttpParams()
      .set('email', email)
      .set('otp', otp);
    return this.http.post(`${this.baseUrl}/verifyOtp`, null, { params });
  }
}
