import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ActivatedRoute } from '@angular/router'; // für AddproductComponent nutzen können 

interface Product {
  id:number;
  name:string;
  amount:number;
  unit:string;
  expiryDate:string;
}

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  products: Product[] = [
    //  Probe‑Daten :
    { id: 1, name: 'Gurke', amount: 3, unit: 'Stück', expiryDate: '2025-12-31' },
    { id: 2, name: 'Tomate', amount: 5, unit: 'Stück', expiryDate: '2025-11-30' },
    // ...
  ];
 // Optionale Variable für das Bearbeiten eines einzelnen Produkts:
 newProduct?: Product;

  constructor(private route:ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Später: Abruf aus dem Backend via Service

    // Prüfe, ob eine Produkt-ID als Parameter vorhanden ist
  const productId = this.route.snapshot.paramMap.get('id');
  if (productId) {
    // Hier würdest du normalerweise deinen Service aufrufen
    // Für Demo-Zwecke: Simuliere, dass ein Produkt gefunden wurde
    const id = Number(productId);
    // Beispiel-Daten: Du kannst hier auch einen Service nutzen
    this.newProduct = {
      id: id,
      name: 'Gurke',
      amount: 3,
      unit: 'Stück',
      expiryDate: '2025-12-31'
    };
  }
  }

 showUpdateForm = false;
 selectedProduct: any = {}; 
 
 editProduct(product: any) {
   this.selectedProduct = { ...product }; // Produkt-Daten ins Formular kopieren
   this.showUpdateForm = true;
 }
 
 closeUpdateForm() {
   this.showUpdateForm = false;
 }
 
updateProduct() {
  console.log('Produkt wurde aktualisiert:', this.selectedProduct);
}

}

