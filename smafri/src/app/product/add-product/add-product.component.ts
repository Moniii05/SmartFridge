import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importiere FormsModule für ngModel
//import { CommonModule } from '@angular/common'; // Importiere CommonModule für ngIf
import { CommonModule } from '@angular/common'; // Importiere CommonModule für ngIf und andere Direktiven


@Component({
  selector: 'app-add-product',
  standalone: true,  // Behalte standalone: true
  imports: [FormsModule, CommonModule], // Füge FormsModule hier hinzu
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'] // Korrektur: styleUrls statt styleUrl
})
export class AddProductComponent {
  // Variable, die steuert, ob Formular angezeigt wird
  showAddProductForm = true;

  // Objekt für neue Produkt
  newProduct = { name: '', amount: 0 };

  // Schaltet Formular zum Hinzufügen Produkts ein/aus
  toggleAddProductForm() {
    this.showAddProductForm = !this.showAddProductForm;
    console.log('showAddProductForm:', this.showAddProductForm);  // Debugging: Überprüfen, ob der Wert richtig umgeschaltet wird
    alert(`Formular anzeigen: ${this.showAddProductForm}`);
  }

  // Speichert neue Produkt
  saveProduct() {
    console.log('Produkt speichern:', this.newProduct);

    // Formular zurücksetzen & ausblenden
    this.newProduct = { name: '', amount: 0 };
   //this.showAddProductForm = false;
  }
}
