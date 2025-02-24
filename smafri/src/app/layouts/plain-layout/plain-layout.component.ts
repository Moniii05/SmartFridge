import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // hinzufügen

@Component({
  selector: 'app-plain-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styles: []
})
export class PlainLayoutComponent {

}
