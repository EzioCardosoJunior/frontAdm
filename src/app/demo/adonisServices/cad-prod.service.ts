import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadProdService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.apiUrl}/product-groups`);
  }

  post(data: any) {
    return this.http.post(`${this.apiUrl}/${'product-groups'}`, data);
  }
}
