import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


import{AfterViewInit, ViewChild, ElementRef} from '@angular/core';

import { RouterLink } from '@angular/router';

// importiere service 
import { ProductService, Product } from '../product.service';
import { HttpErrorResponse } from '@angular/common/http';


/* interface Product {
  id:number;
  name:string;
  amount:number;
  unit:string;
  expiryDate:string;
} */

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements AfterViewInit, OnInit {
  product!: Product;
  products: Product[] = [];

  selectedProduct: Product = { id: '0', name: '', amount: 0, unit: '', expiryDate: '' };
  //products: Product[] = [
    //  Probe‑Daten :
   // { id: 1, name: 'Gurke', amount: 3, unit: 'Stück', expiryDate: '2025-12-31' },
    //{ id: 2, name: 'Tomate', amount: 5, unit: 'Stück', expiryDate: '2025-11-30' },
    // ...
 // ];

 // Private Variable und Setter für showUpdateForm:
 private _showUpdateForm = false;
 get showUpdateForm() {
   return this._showUpdateForm;
 }
 set showUpdateForm(value: boolean) {
   this._showUpdateForm = value;
   if (value) {
     // Nach kurzem Delay sicherstellen, dass das Formular im DOM ist
     setTimeout(() => {
       if (this.draggable) {
         this.makeDraggable(this.draggable.nativeElement);
       } else {
         console.warn('Draggable Element nicht gefunden (im Setter)');
       }
     }, 0);
   }
 }

// selectedProduct: Product = { id: 0, name: '', amount: 0, unit: '', expiryDate: '' };

  // Für Drag-and-Drop: Referenz auf das draggabare Formular-Element
  @ViewChild('draggable') draggable!: ElementRef;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public productService: ProductService
  ) {}

  ngOnInit(): void {
    // Hole die Produkt-ID aus der URL (z.B. /update-product/6)
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (data: Product) => {
          this.product = data;
          // Vorbefüllen des Formulars
          this.selectedProduct = { ...data };
        },
        error: (err: HttpErrorResponse) => {
          console.error('Fehler beim Laden des Produkts:', err);
        }
      });
    } else {
     // console.warn('Keine Produkt-ID angegeben. Update nicht möglich.');
     // this.router.navigate(['/']);
      // Übersicht-Modus: Alle Produkte laden
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Fehler beim Laden der Produkte:', err);
      }
    });
    }
  }

  
  // Da das Formular erst später erscheint, braucht ngAfterViewInit hier nichts weiter zu tun
  ngAfterViewInit(): void {
    // Bei Add-Formular war kein Problem, da showAddProductForm true war
    // Hier wird Draggable-Initialisierung über Setter von showUpdateForm ausgeführt
  }

 editProduct(product: Product) {
  console.log("Produkt zum Bearbeiten:", product);
   this.selectedProduct = { ...product }; // Produkt-Daten ins Formular kopieren
   this.showUpdateForm = true; //Overlay Setter ruft makeDraggable auf
 }
 
 // schließt Overlay
 closeUpdateForm() {
   this.showUpdateForm = false;
 }
 
updateProduct() {
  console.log('Produkt wurde aktualisiert:', this.selectedProduct);
  if (this.selectedProduct && this.selectedProduct.id) {
    this.productService.updateProduct(this.selectedProduct).subscribe({
      next: (updatedProduct: Product) => {
        console.log('Produkt erfolgreich aktualisiert:', updatedProduct);
        this.showUpdateForm = false;
        // Optionale Navigation: Zurück zur Hauptseite oder zur Produktliste
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Fehler beim Aktualisieren des Produkts:', err);
      }
    });
  }
}

// Drag-and-Drop-Funktion (kopiert & angepasst von Add-Product-Code)
makeDraggable(element: HTMLElement) {
  let offsetX = 0, offsetY = 0, isDragging = false;
  // Suche Element mit id "drag-handle" als Griff für Ziehen
  const handle = document.getElementById("drag-handle");
  if (!handle) return;
  handle.onmousedown = (event) => {
    console.log("Mousedown auf Handle!");
    isDragging = true;
    offsetX = event.clientX - element.offsetLeft;
    offsetY = event.clientY - element.offsetTop;
    document.onmousemove = (e) => {
      if (isDragging) {
        element.style.left = e.clientX - offsetX + "px";
        element.style.top = e.clientY - offsetY + "px";
      }
    };
    document.onmouseup = () => (isDragging = false);
  };
 }
}

