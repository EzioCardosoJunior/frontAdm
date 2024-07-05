import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadProdService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get(endpoint: string) {
    return this.http.get(`${this.apiUrl}/product-groups`);
  }

  post(endpoint: string, data: any) {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data);
  }
}
