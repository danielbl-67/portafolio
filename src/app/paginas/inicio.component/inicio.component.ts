import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { SobremiComponent } from '../sobremi.component/sobremi.component';
import { TecnologiasComponent } from '../tecnologias.component/tecnologias.component';
import { ContactoComponent } from '../contacto/contacto';

interface Proyecto {
  title: string;
  subtitle: string;
  description: string;
  anio: number;
  estado: 'desarrollo' | 'produccion' | 'destacado';
  technologies: string[];
  enlaceDemo?: string;
  enlaceRepositorio: string;
  
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SobremiComponent, TecnologiasComponent, ContactoComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InicioComponent {
  readonly filtroActivo = signal<string>('todos');

  readonly filtrosProyectos = [
    { label: 'Todos', value: 'todos' },
    { label: 'Producción', value: 'produccion' },
    { label: 'En desarrollo', value: 'desarrollo' }
  ];

  readonly proyectos: Proyecto[] = [
    {
      title: 'Fit Moment',
      subtitle: 'Web oficial de Centro Integral de Rendimiento y Salud ',
      description: 'Landing y catálogo transaccional con sistema de solicitud de citas directas a WhatsApp.',
      anio: 2026,
      estado: 'produccion',
      technologies: ['Angular', 'TypeScript', 'CSS', 'WhatsApp API'],
      enlaceDemo: 'https://fitmoment.vercel.app/',
      enlaceRepositorio: 'https://github.com/danielbl-67/fitmoment'
    },
     {
      title: 'Ainoamoreno_nt',
      subtitle: 'Landing page oficial de nutricion',
      description: 'Landing y catálogo transaccional con sistema de solicitud de citas directas a WhatsApp.',
      anio: 2026,
      estado: 'produccion',
      technologies: ['Angular', 'TypeScript', 'CSS', 'WhatsApp API'],
      enlaceDemo: 'https://ainoamorent.vercel.app/',
      enlaceRepositorio: 'https://github.com/danielbl-67/ainoamore_nt'
    },
    {
      title: 'BaseBoss',
      subtitle: 'Gestión Comercial para Pymes',
      description: 'App Android para autónomos: emisión de facturas/presupuestos PDF y catálogo local.',
      anio: 2026,
      estado: 'desarrollo',
      technologies: ['Android Studio', 'Kotlin', 'SQLite', 'iTextPDF'],
      enlaceRepositorio: 'https://github.com/danielbl-67'
    }
  ];

  readonly proyectosFiltrados = computed(() => {
    const f = this.filtroActivo();
    return f === 'todos' ? this.proyectos : this.proyectos.filter(p => p.estado === f);
  });

  establecerFiltro(f: string): void {
    this.filtroActivo.set(f);
  }

  obtenerCantidad(estado: string): number {
    return estado === 'todos' ? this.proyectos.length : this.proyectos.filter(p => p.estado === estado).length;
  }
}