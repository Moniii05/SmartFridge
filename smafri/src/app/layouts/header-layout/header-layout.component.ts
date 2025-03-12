import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AddProductComponent } from '../../product/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from '../../product/list-product/list-product.component'; 
// import { HttpClientModule } from '@angular/common/http'; // veraltet

@Component({
  standalone: true,
  selector: 'app-header-layout',
  imports: [RouterOutlet, RouterLink, AddProductComponent, FormsModule, CommonModule, ListProductComponent],
  template: `
    <div class="header">
      <img src="assets/kühlschrank-no-background.png" alt="fridge" style="width:450px" />
      <div class="text-container">
        <h1>SmartFridge</h1>
        <div class="button-container">
          <!-- Toggle-Button für Produkt hinzufügen -->
          <button (click)="toggleAddProductForm()">Produkt hinzufügen</button>
          <!-- Button für Produkt aktualisieren -->
          <button routerLink="/update-product">Produkt aktualisieren</button>
          <button routerLink="/delete-product">Produkt löschen</button>

        </div>
        <!-- Formular wird nur angezeigt, wenn showAddProductForm true ist -->
        <app-add-product *ngIf="showAddProductForm"></app-add-product>
      </div>
    </div>

    <app-list-product></app-list-product>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./header-layout.component.css']
})
export class HeaderLayoutComponent {
  showAddProductForm = false;

  toggleAddProductForm() {
    this.showAddProductForm = !this.showAddProductForm;
    console.log('Formular sichtbar:', this.showAddProductForm);
  }
}
