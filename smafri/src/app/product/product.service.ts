import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // hinzufügen 
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

export interface Product {
  _id?: string; // ? soll optional machen , _ für mongo
  name: string;
  amount: number; 
  unit: string;
  expiryDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private baseUrl = 'https://smartfridge-tvaz.onrender.com/products';
  private apiUrl = `${environment.apiUrl}/api/products`;

  constructor(private http: HttpClient) { }
// Get all products
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl);
}

// Add a new product
addProduct(product: Product): Observable<Product> {
  return this.http.post<Product>(this.apiUrl, product);
}

// Update an existing product
updateProduct(product: Product): Observable<Product> {
  const url = `${this.apiUrl}/${product._id}`;
  return this.http.put<Product>(url, product);
}

// Delete a product by ID
deleteProduct(id: string): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete(url);
}

 // Einzelnes Produkt anhand der ID abrufen
getProductById(id: string): Observable<Product> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<Product>(url);
}

}
