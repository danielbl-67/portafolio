import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarranavegacionComponent } from './componentes/barranavegacion.component/barranavegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarranavegacionComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly anioActual = 2026;
}