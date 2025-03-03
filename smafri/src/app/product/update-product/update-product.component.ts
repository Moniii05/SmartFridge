import { Component} from '@angular/core';
// import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import { ActivatedRoute } from '@angular/router'; // für AddproductComponent nutzen können 

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
export class UpdateProductComponent {
  products: Product[] = [
    //  Probe‑Daten :
    { id: 1, name: 'Gurke', amount: 3, unit: 'Stück', expiryDate: '2025-12-31' },
    { id: 2, name: 'Tomate', amount: 5, unit: 'Stück', expiryDate: '2025-11-30' },
    // ...
  ];
 

 /* constructor(private route:ActivatedRoute, private router: Router) {} */
 constructor() {}


 showUpdateForm = false;
 selectedProduct: Product = { id: 0, name: '', amount: 0, unit: '', expiryDate: '' };

 
 editProduct(product: Product) {
  console.log("Produkt zum Bearbeiten:", product);
   this.selectedProduct = { ...product }; // Produkt-Daten ins Formular kopieren
   this.showUpdateForm = true; //Overlay
 }
 
 // schließt Overlay
 closeUpdateForm() {
   this.showUpdateForm = false;
 }
 
updateProduct() {
  console.log('Produkt wurde aktualisiert:', this.selectedProduct);
  this.showUpdateForm = false;
}

}

