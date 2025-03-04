import { Component } from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import { RouterLink } from '@angular/router';

interface Product {
  id: number;
  name: string;
  amount: number;
  unit: string;
  expiryDate: string;
}

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
products: Product[] = [
  { id: 1, name: 'Gurke', amount: 3, unit: 'Stück', expiryDate: '2025-12-31' },
  { id: 2, name: 'Tomate', amount: 5, unit: 'Stück', expiryDate: '2025-11-30' }
];

// Steuert, ob Bestätigungsdialog angezeigt wird
showDeleteConfirm = false;

// Hier wird aktuell ausgewählte Produkt zum Löschen gespeichert
selectedProduct: Product = { id: 0, name: '', amount: 0, unit: '', expiryDate: '' };

// Wird beim Klick auf Produkt aufgerufen
confirmDelete(product: Product) {
  console.log("Produkt zur Löschung ausgewählt:", product);
  this.selectedProduct = { ...product }; // Kopiere Produkt
  this.showDeleteConfirm = true;           // Zeige Bestätigungsdialog
}

// Schließt Bestätigungsdialog ohne zu löschen
closeDeleteConfirm() {
  this.showDeleteConfirm = false;
}

// Löscht das ausgewählte Produkt aus der Liste
deleteProduct() {
  console.log("Produkt wurde gelöscht:", this.selectedProduct);
  this.products = this.products.filter(p => p.id !== this.selectedProduct.id);
  this.showDeleteConfirm = false;
}
}
