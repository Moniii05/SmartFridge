import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AddProductComponent } from '../../product/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from '../../product/list-product/list-product.component'; 
import { Product, ProductService } from '../../product/product.service'; // hinzufügen

// import { HttpClientModule } from '@angular/common/http'; // veraltet
import { ProductFormZustandService } from '../../product-form-zustand.service';  // für Zustand Form

@Component({
  standalone: true,
  selector: 'app-header-layout',
  imports: [RouterOutlet, RouterLink, AddProductComponent, FormsModule, CommonModule, ListProductComponent],
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent {
  //showAddProductForm = false;
  // 🔹 Zustand für Produktliste
  products: Product[] = [];


  constructor(
    public productFormZustandService: ProductFormZustandService,
    private productService: ProductService // 🔸 hinzufügen
  ) {}

  toggleAddProductForm() {
    // stattdessen, weil show nun in Service gepseichert anstatt Header
    this.productFormZustandService.toggleForm();
  }

   // ⬇️ Diese Methode hier neu einfügen
   logClose() {
    console.log("Header empfängt Close-Event ✅");
    this.productFormZustandService.closeForm();
  }


  // 🔹 Wird nach (productAdded) aufgerufen
  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        console.log('🟢 Produkte neu geladen:', data);
        this.products = data;
      },
      error: (err) => console.error('❌ Fehler beim Laden:', err)
    });
  }
}

  




/*
loadProducts() {
  // Zugriff auf die Kind-Komponente
  const list = document.querySelector('app-list-product') as any;
  if (list?.loadProducts) list.loadProducts(); // Direkt aufrufen
} */
