import { Component, ViewChild,ElementRef, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../product.service';
import { AddProductComponent } from "../add-product/add-product.component"; // Importiere den Service

@Component({
  standalone: true,
  selector: 'app-list-product',
  imports: [CommonModule, FormsModule, AddProductComponent],
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent   {   //  implements OnInit
  @Input()  products: Product[] = [  ];
  
 // Suchbegriff für Filterung 
 searchTerm: string = '';
 sortOption: string = 'alphabetisch';

 constructor(private productService: ProductService) {}

  //ngOnInit(): void {
   // this.loadProducts(); // Daten von MongoDB abrufen
  //}

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: string): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.loadProducts(); // Liste nach dem Löschen aktualisieren
      //this.products = this.products.filter(product => product._id !== id); 
    });
  }

 // Getter für gefilterte Produkte
 get filteredProducts(): Product[] {
  let filtered = this.products;
  if (this.searchTerm) {
    const term = this.searchTerm.toLowerCase();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(term)
    );
  }
  return filtered.sort((a, b) => {
    switch (this.sortOption) {
      case 'alphabetisch':
        return a.name.localeCompare(b.name);
      case 'mengeAufwaerts':
        return a.amount - b.amount;
      case 'mengeAbwaerts':
        return b.amount - a.amount;
      case 'verfallsdatumNah':
        // Bei ISO-Datumsstrings reicht ein stringbasierter Vergleich oft aus.
        return a.expiryDate.localeCompare(b.expiryDate);
      default:
        return 0;
    }
 });
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
