import { Routes } from '@angular/router';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component'; //hinzufügen für seperate Layout 
import { PlainLayoutComponent } from './layouts/plain-layout/plain-layout.component';
import { DeleteProductComponent } from './product/delete-product/delete-product.component'; 
import { ListProductComponent } from './product/list-product/list-product.component';

export const routes: Routes = [
  
  { path: '', 
    component: HeaderLayoutComponent ,
    children: [
      // hier weitere Routen unterbringen, die Header benötigen
    ]
  },

  {
    path: 'update-product',
    component: PlainLayoutComponent,
    children: [
      { path: '', component: UpdateProductComponent },
      { path: ':id', component: AddProductComponent } // für Bearbeitungsmodus
    ]
  },

  {
    path: 'delete-product',  
    component: PlainLayoutComponent,
    children: [
      { path: '', component: DeleteProductComponent }
    ]
  },

  {
    path: 'product-list',  // Neue Route für die Produktliste
    component: ListProductComponent
  }
];
