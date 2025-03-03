import { Routes } from '@angular/router';
import { UpdateProductComponent } from './product/update-product/update-product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component'; //hinzufügen für seperate Layout 
import { PlainLayoutComponent } from './layouts/plain-layout/plain-layout.component';

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
  }
];
