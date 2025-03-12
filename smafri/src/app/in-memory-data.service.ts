import { Injectable } from '@angular/core';

//hinzufügen 
import { InMemoryDbService } from 'angular-in-memory-web-api';
// für id generieren 
import { Product } from './product/product.service'; // wo product interface defniniert ist 

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: '1', name: 'Gurke', amount: 3, unit: 'Stück', expiryDate: '2025-12-31' },
      { id: '2', name: 'Tomate', amount: 5, unit: 'Stück', expiryDate: '2025-11-30' },
      { id: '3', name: 'Karotte', amount: 7, unit: 'Stück', expiryDate: '2025-10-15' },
      { id: '4', name: 'Paprika', amount: 4, unit: 'Stück', expiryDate: '2025-09-20' },
    ];
    return { products };
  }
 // wenn ein neues Produkt ohne ID hinzugefügt wird.
 genId(products: Product[]): string {
   // Wenn ein Produkt keine ID hat, wird 0 verwendet
   const newId = Math.max(...products.map(product => +(product.id ?? 0))) + 1;
   return String(newId);
}

}