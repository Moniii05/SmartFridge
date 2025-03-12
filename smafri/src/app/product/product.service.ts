import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // hinzufügen 
import { Observable } from 'rxjs';

export interface Product {
  id?: string; // ? soll optional machen 
  name: string;
  amount: number; 
  unit: string;
  expiryDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/api/products';

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
  const url = `${this.apiUrl}/${product.id}`;
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
