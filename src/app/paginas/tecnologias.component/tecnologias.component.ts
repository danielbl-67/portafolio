import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface CategoriaTecnologia {
  titulo: string;
  habilidades: string[];
  destacada?: boolean;
}

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TecnologiasComponent {
  readonly tabActivo = signal<'frontend' | 'backend'>('frontend');

  readonly categorias: CategoriaTecnologia[] = [
    {
      titulo: 'Lenguajes & Frameworks',
      habilidades: ['Java', 'JavaScript', 'TypeScript', 'Angular', 'HTML5', 'CSS3', 'SQL']
    },
    {
      titulo: 'Backend & APIs',
      habilidades: ['Java / Spring Boot', 'APIs REST', 'Maven', 'Arquitectura por capas', 'CRUD']
    },
    {
      titulo: 'Bases de Datos',
      habilidades: ['MySQL', 'SQLite', 'Firebase', 'Supabase', 'JDBC']
    },
    {
      titulo: 'Móvil',
      habilidades: ['Android Studio', 'Interfaces XML', 'Persistencia local']
    },
    {
      titulo: 'Herramientas',
      habilidades: ['Git / GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Docker', 'Linux']
    },
    {
      titulo: 'Infraestructura & Soporte (SMR)',
      destacada: true,
      habilidades: ['Configuración hardware', 'Redes locales', 'Sistemas Operativos', 'Diagnóstico','Mantenimiento de equipos']
    }
  ];

  readonly bloquesEnfoque = {
    frontend: {
      titulo: 'Interfaces Reactivas y UX de Conversión',
      descripcion: 'Desarrollo en Angular mediante componentes independientes, optimización de renderizado, consumo asíncrono y flujos limpios adaptados a cualquier pantalla.',
      puntos: ['Arquitectura modular', 'Diseño responsive fluido', 'Rendimiento y tiempos de carga']
    },
    backend: {
      titulo: 'Servicios Robustos y Persistencia Estricta',
      descripcion: 'Modelado relacional y endpoints desacoplados en Java/Spring Boot o NodeJS, garantizando integridad en las operaciones, seguridad y transacciones fiables.',
      puntos: ['APIs desacopladas', 'Diseño de esquemas SQL', 'Manejo de errores consistente']
    }
  };

  cambiarTab(tab: 'frontend' | 'backend'): void {
    this.tabActivo.set(tab);
  }
}