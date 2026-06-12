import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarranavegacionComponent } from './componentes/barranavegacion.component/barranavegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, BarranavegacionComponent],
})
export class AppComponent {
  title = 'portafolio';
}
