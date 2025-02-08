import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProductComponent } from './product/add-product/add-product.component';  // Importiere Standalone-Komponente


@Component({
  selector: 'app-root',
  standalone: true,  // AppComponent ist Standalone
  imports: 
  [RouterOutlet,
    AddProductComponent // Standalone hier bei Elternkomponente wegen neue version
  ],
 

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smafri';

  // einfügen damit verwenden addproduct verwenden können
  showAddProductForm = false;

  toggleAddProductForm() {
    this.showAddProductForm = !this.showAddProductForm;
  }
}
