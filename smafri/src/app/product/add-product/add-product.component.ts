import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importiere FormsModule für ngModel

@Component({
  selector: 'app-add-product',
  standalone: true,  // Behalte standalone: true
  imports: [FormsModule], // Füge FormsModule hier hinzu
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'] // Korrektur: styleUrls statt styleUrl
})
export class AddProductComponent {
  // Variable, die steuert, ob Formular angezeigt wird
  showAddProductForm = false;

  // Objekt für neue Produkt
  newProduct = {
    name: '',
    amount: 0
  };

  // Schaltet Formular zum Hinzufügen Produkts ein/aus
  toggleAddProductForm() {
    this.showAddProductForm = !this.showAddProductForm;
  }

  // Speichert neue Produkt
  saveProduct() {
    console.log('Produkt speichern:', this.newProduct);

    // Formular zurücksetzen & ausblenden
    this.newProduct = { name: '', amount: 0 };
    this.showAddProductForm = false;
  }
}
