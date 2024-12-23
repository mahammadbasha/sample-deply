import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl = 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    // Send a POST request to your backend to check the credentials
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }
}