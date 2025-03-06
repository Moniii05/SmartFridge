import { Component, ViewChild,ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  amount: number;
  unit: string;
  expiryDate: string;
}

@Component({
  standalone: true,
  selector: 'app-list-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {
  products: Product[] = [
    { id: 1, name: 'Gurke', amount: 3, unit: 'Stück', expiryDate: '2025-12-31' },
    { id: 2, name: 'Tomate', amount: 5, unit: 'Stück', expiryDate: '2025-11-30' },
    { id: 3, name: 'Karotte', amount: 7, unit: 'Stück', expiryDate: '2025-10-15' },
    { id: 4, name: 'Paprika', amount: 4, unit: 'Stück', expiryDate: '2025-09-20' },
    
  ];

 // Suchbegriff für Filterung (optional)
 searchTerm: string = '';

 // Getter für gefilterte Produkte
 get filteredProducts(): Product[] {
   if (!this.searchTerm) {
     return this.products;
   }
   const term = this.searchTerm.toLowerCase();
   return this.products.filter(product =>
     product.name.toLowerCase().includes(term)
   );
 }

 // Referenz zum scrollbaren Container
 @ViewChild('scrollContainer') scrollContainer!: ElementRef;

 // Methode, um den Container nach links zu scrollen
 scrollLeft() {
   this.scrollContainer.nativeElement.scrollBy({ left: -200, behavior: 'smooth' });
 }

 // Methode, um den Container nach rechts zu scrollen
 scrollRight() {
   this.scrollContainer.nativeElement.scrollBy({ left: 200, behavior: 'smooth' });
 }



}
