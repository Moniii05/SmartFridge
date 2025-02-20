import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AddProductComponent } from './product/add-product/add-product.component';  // Importiere Standalone-Komponente
import { FormsModule } from '@angular/forms'; // Importiere FormsModule für ngModel
import { CommonModule } from '@angular/common'; // Importiere CommonModule für ngIf und andere Direktiven

@Component({
  selector: 'app-root',
  standalone: true,  // AppComponent ist Standalone
  imports: 
  [RouterOutlet,
    RouterLink, //hinzufügen
    AddProductComponent,
    FormsModule,
    CommonModule, 
    // Standalone hier bei Elternkomponente wegen neue version
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smafri';

  // einfügen damit addproduct verwenden können
  showAddProductForm = false;

  toggleAddProductForm() {
    this.showAddProductForm = !this.showAddProductForm;
    console.log("Formular sichtbar:",this.showAddProductForm);  // Debugging
  }
}
