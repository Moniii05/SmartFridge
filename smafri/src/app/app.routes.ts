import { Routes } from '@angular/router';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';

export const routes: Routes = [
  { path: 'add-product', component: AddProductComponent },
  { path: 'update-product', component: UpdateProductComponent },
  { path: 'update-product/:id', component: AddProductComponent } // Für den Bearbeitungsmodus
];
