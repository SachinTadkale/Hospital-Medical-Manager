import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { userData } from '../../model/user-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private baseUrl = "http://localhost:8080/api";


  constructor(private http:HttpClient) {}

  register(user:userData): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user, { responseType: 'json' });
  }


  login(data: any): Observable<string> {
  return this.http.post(`${this.baseUrl}/login`, data, { responseType: 'text' });
}

 getUserById(): Observable<userData> {
    const token = localStorage.getItem('ManagerToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<userData>(`${this.baseUrl}/getUserById`, { headers });
  }
}
