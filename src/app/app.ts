import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarranavegacionComponent } from './componentes/barranavegacion.component/barranavegacion.component';
import { ContactoComponent } from "./paginas/contacto/contacto";

@Component({
  selector: 'app-root',
  standalone: true,
  
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, BarranavegacionComponent, ContactoComponent],
})
export class AppComponent {
  title = 'portafolio';
}
