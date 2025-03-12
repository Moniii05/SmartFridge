import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importiere FormsModule für ngModel
import { CommonModule } from '@angular/common'; // Importiere CommonModule für ngIf und andere Direktiven
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';

// Importiere Service 
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-add-product',
  standalone: true, 
  imports: [FormsModule, CommonModule], // Füge FormsModule hier hinzu
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'] // Korrektur: styleUrls statt styleUrl
})
export class AddProductComponent implements AfterViewInit{
  @ViewChild('draggable') draggable!: ElementRef;

  // Variable, die steuert, ob Formular angezeigt wird
  showAddProductForm = true;

  // Objekt für neue Produkt
  newProduct: Product = { name: '', amount: 0, unit: 'g', expiryDate: '' };

// Injektion ProductService in Konstruktor (direkt nach Imports)
constructor(private productService: ProductService) {}

  // Schaltet Formular zum Hinzufügen Produkts ein/aus
  toggleAddProductForm() {
    this.showAddProductForm = !this.showAddProductForm;
    console.log('showAddProductForm:', this.showAddProductForm);  // Debugging: Überprüfen, ob der Wert richtig umgeschaltet wird
    alert(`Formular anzeigen: ${this.showAddProductForm}`);
  }

  ngAfterViewInit() {
    if (this.draggable) {
      this.makeDraggable(this.draggable.nativeElement);
    } else {
      console.warn('Draggable Element wurde nicht gefunden');
    }
  }


  makeDraggable(element: HTMLElement) {
    let offsetX = 0, offsetY = 0, isDragging = false;

    const handle = document.getElementById("drag-handle");
    if (!handle) return;

    handle.onmousedown = (event) => {
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

  // Speichert neue Produkt
  saveProduct() {
    console.log('Produkt speichern:', this.newProduct);

 // Aufruf des Services:
 this.productService.addProduct(this.newProduct).subscribe(
  (response) => {
    console.log('Produkt erfolgreich hinzugefügt:', response);

    // Formular zurücksetzen & ausblenden
    this.newProduct = { name: '', amount: 0, unit: 'g', expiryDate: ''};
  },

  (error) => {
    console.error('Fehler beim Hinzufügen des Produkts:', error);
  }
);
}

  closeForm() {
    this.showAddProductForm = false;
  }
}
