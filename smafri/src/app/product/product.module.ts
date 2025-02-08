import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importiere das FormsModule
/* entfernen, stattdessen in elternkomponente rein 
import { AddProductComponent } from './add-product/add-product.component'; // Importiere Komponente
*/

@NgModule({
  declarations: [
   /* AddProductComponent // Deklariere deine Komponente */
  ],
  imports: [
    CommonModule,
    FormsModule, // Füge das FormsModule hier hinzu
    /* AddProductComponent // direkt im import verwenden (standalone) */
  ],
  exports: [
   /* AddProductComponent // Exportiere die Komponente (falls nötig) */
  ]
 
})
export class ProductModule { }
