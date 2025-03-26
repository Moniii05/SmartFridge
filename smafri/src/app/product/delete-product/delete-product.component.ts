import { Component, OnInit } from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { RouterLink } from '@angular/router';

//service importieren
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
products: Product[] = []; 

// Steuert, ob Bestätigungsdialog angezeigt wird
showDeleteConfirm = false;

// Hier wird aktuell ausgewählte Produkt zum Löschen gespeichert
selectedProduct: Product = { _id: '0', name: '', amount: 0, unit: '', expiryDate: '' };

searchTerm: string = '';  // suchfkt

// Konstruktor mit Service-Injektion:
constructor(private productService: ProductService) {}

ngOnInit(): void {
  this.loadProducts();  // Produkte aus der DB abrufen
}

loadProducts(): void {
  this.productService.getProducts().subscribe({
    next: (data) => {
      this.products = data;  // Speichert Datenbank-Daten in `products`
    },
    error: (err) => {
      console.error("Fehler beim Laden der Produkte:", err);
    }
  });
}

// Wird beim Klick auf Produkt aufgerufen
confirmDelete(product: Product) {
  console.log("Produkt zur Löschung ausgewählt:", product);
  this.selectedProduct = { ...product }; // Kopiere Produkt
  this.showDeleteConfirm = true;           // Zeige Bestätigungsdialog
}

// Schließt Bestätigungsdialog ohne zu löschen
closeDeleteConfirm(): void {
  this.showDeleteConfirm = false;
}

// Löscht das ausgewählte Produkt aus der Liste
// nun mit service + lokale liste
deleteProduct() {
  console.log("Produkt wurde gelöscht:", this.selectedProduct);
  // this.products = this.products.filter(p => p.id !== this.selectedProduct.id);
  //this.showDeleteConfirm = false;

  // 1. Service-Aufruf:
this.productService.deleteProduct(this.selectedProduct._id!).subscribe({ // ! definitiv definiert 
  next: () => {
    console.log("Produkt erfolgreich gelöscht (Backend).", this.selectedProduct);

    // 2. Lokale Liste aktualisieren:
    this.products = this.products.filter(p => p._id !== this.selectedProduct._id);
    
    // 3. Bestätigungsdialog schließen
    this.showDeleteConfirm = false;
  },
  error: (err) => {
    console.error("Fehler beim Löschen des Produkts:", err);
     }
  });
 }

 // suchfkt
 get filteredProducts(): Product[] {
  const term = this.searchTerm.toLowerCase();
  return this.products.filter(product =>
    product.name.toLowerCase().includes(term)
  );
}
}




