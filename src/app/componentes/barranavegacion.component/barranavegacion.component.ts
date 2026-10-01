import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-barranavegacion',
  standalone: true,
  templateUrl: './barranavegacion.component.html',
  styleUrls: ['./barranavegacion.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarranavegacionComponent {
  readonly menuAbierto = signal(false);

  readonly enlaces = [
    { target: '#sobre-mi', texto: 'Sobre mí' },
    { target: '#habilidades', texto: 'Habilidades' },
    { target: '#proyectos', texto: 'Proyectos' },
    { target: '#contacto', texto: 'Contacto' }
  ];

  alternarMenu(): void {
    this.menuAbierto.update(v => !v);
  }

  cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}