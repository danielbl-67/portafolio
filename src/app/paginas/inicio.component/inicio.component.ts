import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  projectsList = [
    {
      title: 'Portafolio Anterior',
      description: 'Mi primer portafolio estático subido a GitHub Pages con mi información personal.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://danielbl-67.github.io',
    },
    {
      title: 'GYMZY (PROYECTO FINAL)',
      description: 'Aplicación movil para cualquier usuario y ayuda para los nutricionistas y entrenadores personales autónomos.',
      technologies: ['Java', 'Spring Boot', 'SQL(FireBase)', 'Movil(Android)'],
      link: 'https://github.com/danielbl-67',
    },
  ];
}
