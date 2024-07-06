import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadUserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(data: any) {
    return this.http.get(`${this.apiUrl}/register`);
  }

  post(data: any) {
    return this.http.post(`${this.apiUrl}/users`, data);
  }
}
