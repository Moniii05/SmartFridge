import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import{AfterViewInit, ViewChild, ElementRef} from '@angular/core';



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
export class UpdateProductComponent implements AfterViewInit {
  products: Product[] = [
    //  Probe‑Daten :
    { id: 1, name: 'Gurke', amount: 3, unit: 'Stück', expiryDate: '2025-12-31' },
    { id: 2, name: 'Tomate', amount: 5, unit: 'Stück', expiryDate: '2025-11-30' },
    // ...
  ];
 
 constructor() {}

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

 selectedProduct: Product = { id: 0, name: '', amount: 0, unit: '', expiryDate: '' };

  // Für Drag-and-Drop: Referenz auf das draggabare Formular-Element
  @ViewChild('draggable') draggable!: ElementRef;

  
  // Da das Formular erst später erscheint, braucht ngAfterViewInit hier nichts weiter zu tun
  ngAfterViewInit() {
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
  this.showUpdateForm = false;
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

