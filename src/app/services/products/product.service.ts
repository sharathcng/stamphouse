import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('http://44.201.155.87:8080/product/getAllProduct');
  }
}
