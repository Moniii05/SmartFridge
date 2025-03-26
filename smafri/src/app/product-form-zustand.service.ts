// Wert im Service speichern, damit bei Seitenwechsel erhalten bleibt

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductFormZustandService {
  private _showAddProductForm = false;

  get showAddProductForm(): boolean {
    return this._showAddProductForm;
  }

  toggleForm() {
    this._showAddProductForm = !this._showAddProductForm;
    console.log('Formular Status im Service:', this._showAddProductForm);
  }

  closeForm() {
    console.log('❌ Service: closeForm() wurde aufgerufen');
    this._showAddProductForm = false;
  }

}

