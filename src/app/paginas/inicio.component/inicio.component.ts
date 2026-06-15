import { Component } from '@angular/core';

interface Proyecto {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link: string;
  demoLink?: string;
  tipoIcono: 'movil' | 'barber' | 'codigo' | 'web';
}

@Component({
  selector: 'app-inicio',

  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  projectsList: Proyecto[] = [
    {
      title: 'GYMZY',
      subtitle: 'PROYECTO FINAL',
      description: 'Aplicación móvil enfocada al sector fitness. Ofrece herramientas de gestión avanzadas tanto para usuarios como para entrenadores personales y nutricionistas autónomos.',
      technologies: ['Java', 'Spring Boot', 'Android Studio', 'Firebase'],
      link: 'https://github.com/danielbl-67/gymzy',
      tipoIcono: 'movil'
    },
    {
      title: 'Peluquería Daniel',
      subtitle: 'GESTIÓN DE SERVICIOS',
      description: 'Plataforma completa para la reserva de citas en tiempo real, administración de agendas y optimización de catálogos para salones de estética.',
      technologies: ['Java', 'Spring Boot', 'H2 Database', 'Web'],
      link: 'https://github.com/danielbl-67/peluqueria',
      demoLink: 'https://peluqueria-daniel.vercel.app',
      tipoIcono: 'barber'
    },
    {
      title: 'REAPER BOT',
      subtitle: 'ARQUITECTURA & LOGIC',
      description: 'Módulo backend centrado en lógica pura y patrones de diseño multiplataforma estructurados bajo los estándares de DAM.',
      technologies: ['Java Core', 'Design Patterns', 'Multiplatform'],
      link: 'https://github.com/danielbl-67/reaper',
      tipoIcono: 'codigo'
    },
  ];
}
