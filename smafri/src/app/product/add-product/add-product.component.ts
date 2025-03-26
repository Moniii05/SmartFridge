import { AfterViewChecked, Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms'; // für [(ngModel)]
import { CommonModule } from '@angular/common'; // für ngIf,..

// Importiere Service 
import { ProductService, Product } from '../product.service';

import {Output, EventEmitter} from '@angular/core'; // damit anzeige zeitgleich aktualisiert

import { ProductFormZustandService } from '../../product-form-zustand.service'; // zustand

// hiermit anstatt timer und so, weil fkt nicht 
// damit drag funktioniert 
import { DragDropModule} from '@angular/cdk/drag-drop';   

@Component({
  selector: 'app-add-product',
  standalone: true, 
  imports: [FormsModule, 
    CommonModule,
     DragDropModule, 
    ], 
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'] // Korrektur: styleUrls statt styleUrl
})
export class AddProductComponent { 
   // Event ausgelöst bei "speichern" zum Aktualisieren d Anzeige
  @Output() productAdded = new EventEmitter<void>();
  @Output() closeClicked = new EventEmitter<void>();
  
  // ⬇️ Zugriff auf das Dialog-Element
  @ViewChild('dialog') dialogRef!: ElementRef<HTMLElement>;

  // Objekt für neue Produkt (ng-Model binding)
  newProduct: Product = { name: '', amount: 0, unit: 'g', expiryDate: '' };
  
  // Injektion ProductService in Konstruktor 
constructor(
  private productService: ProductService,
  public productFormZustandService: ProductFormZustandService  // zustand
) {}



  // Zustand von formular holen aus service über getter
  //get showAddProductForm(): boolean {
  //  return this.productFormZustandService.showAddProductForm;
  //}

  
  saveProduct() {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.productAdded.emit();
      this.newProduct = { name: '', amount: 0, unit: 'g', expiryDate: '' };
     // this.productFormZustandService.closeForm();
    });
  }

  closeForm() {
    console.log('❌ Komponente: closeForm() wurde ausgelöst');
    this.closeClicked.emit();
  }

  

 
}



/*
// Speichert neue Produkt + form schließen
  saveProduct() {
    console.log('Produkt speichern:', this.newProduct);

 // Aufruf des Services:
 this.productService.addProduct(this.newProduct).subscribe(
  (response) => {
    console.log('Produkt erfolgreich hinzugefügt:', response);

     // Event, damit ListProductComponent die Daten aktualisiert
     this.productAdded.emit();  

    // Formular zurücksetzen & ausblenden
    this.newProduct = { name: '', amount: 0, unit: 'g', expiryDate: ''};
   // this.showAddProductForm = false; // Nach dem Speichern schließen

   // Formular schließen über Service
   //this.productFormZustandService.closeForm();
  },

  (error) => {
    console.error('Fehler beim Hinzufügen des Produkts:', error);
  }
);
}

  closeForm() {
    console.log('❌ Komponente: closeForm() wurde ausgelöst');
    console.log('📤 EventEmitter:', this.closeClicked);
    console.log('📤 Zustand vom Service (vor):', this.productFormZustandService.showAddProductForm);
    this.closeClicked.emit(); // Statt direkt im Service!
    

  }

  */