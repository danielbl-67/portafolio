import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-barranavegacion',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './barranavegacion.component.html',
  styleUrl: './barranavegacion.component.css',
})
export class BarranavegacionComponent {}
