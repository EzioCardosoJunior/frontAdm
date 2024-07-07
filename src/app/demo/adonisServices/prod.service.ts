import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(`${this.apiUrl}/product-groups`);
  }

  subGroupGet() {
    return this.http.get(`${this.apiUrl}/product-subgroups`);
  }

  post(data: any) {
    return this.http.post(`${this.apiUrl}/${'product-groups'}`, data);
  }

  subGroupPost(data: any) {
    console.log(data)
    return this.http.post(`${this.apiUrl}/${'product-subgroups'}`, data);
  }
}
