import { Component } from '@angular/core';

type BloqueEnfoque = 'frontend' | 'backend';

type EstadoProyecto = 'empezado' | 'en-proceso' | 'terminado';
type FiltroProyecto = 'todos' | EstadoProyecto;

interface TarjetaEnfoque {
  titulo: string;
  descripcion: string;
}

interface BloqueEnfoqueContenido {
  value: BloqueEnfoque;
  label: string;
  kicker: string;
  tituloPrincipal: string;
  descripcionPrincipal: string;
  tarjetas: TarjetaEnfoque[];
}

interface Proyecto {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  enlaceRepositorio: string;
  enlaceDemo?: string;
  tipoIcono: 'movil' | 'barber' | 'codigo' | 'web';
  estado: EstadoProyecto;
  anio: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // Bloque visible en la sección de enfoque.
  bloqueEnfoqueActivo: BloqueEnfoque = 'frontend';

  // Filtro activo para mostrar todos los proyectos o solo un estado concreto.
  filtroActivo: FiltroProyecto = 'todos';

  // Alternador visual entre la parte Frontend y Backend.
  bloquesEnfoque: BloqueEnfoqueContenido[] = [
    {
      value: 'frontend',
      label: 'Frontend',
      kicker: 'Mi obsesión visual',
      tituloPrincipal: 'Interfaces fluidas y pixel-perfect',
      descripcionPrincipal:
        'Me obsesiona el diseño limpio, las microinteracciones y las interfaces modernas. Una app puede ser potente, pero si no entra por los ojos, el usuario se va.',
      tarjetas: [
        {
          titulo: 'Estética y modernidad',
          descripcion:
            'Busco composiciones limpias, jerarquía visual clara y detalles que hagan que la experiencia se sienta cuidada desde el primer vistazo.'
        },
        {
          titulo: 'Experiencia de usuario primero',
          descripcion:
            'Aplico lógica de DAM para simplificar flujos complejos y diseñar pantallas donde el usuario entiende qué hacer en menos de un segundo.'
        },
        {
          titulo: 'Ecosistema web moderno',
          descripcion:
            'Domino frameworks actuales, pero también entiendo cómo renderiza el navegador y me adapto rápido a cualquier librería o stack de frontend.'
        }
      ]
    },
    {
      value: 'backend',
      label: 'Backend',
      kicker: 'Mi ADN de DAM',
      tituloPrincipal: 'Robustez, datos y arquitectura sólida',
      descripcionPrincipal:
        'Mi base en DAM me enseñó a construir soluciones que escalen con orden: APIs claras, bases de datos bien pensadas y lógica limpia que aguanta el crecimiento.',
      tarjetas: [
        {
          titulo: 'Robustez y código limpio',
          descripcion:
            'Me apoyo en POO, patrones de diseño y arquitecturas limpias para mantener cada pieza entendible, reutilizable y fácil de evolucionar.'
        },
        {
          titulo: 'Modelado y optimización SQL',
          descripcion:
            'No le tengo miedo a las bases de datos relacionales complejas. Diseño esquemas eficientes, relaciones sólidas y consultas optimizadas para cuidar el rendimiento.'
        },
        {
          titulo: 'Agnóstico al lenguaje',
          descripcion:
            'Entiendo los fundamentos del backend: APIs REST, seguridad JWT y flujo de datos. Eso me permite adaptarme a Node.js, Java/Spring Boot o cualquier stack servidor.'
        }
      ]
    }
  ];

  // Botones del panel de filtrado que aparecen encima del listado.
  filtrosProyectos: { value: FiltroProyecto; label: string }[] = [
    { value: 'todos', label: 'Todos' },
    { value: 'terminado', label: 'Terminados' },
    { value: 'en-proceso', label: 'En proceso' },
    { value: 'empezado', label: 'Empezados' }
  ];

  // Texto visible para cada estado de proyecto.
  readonly etiquetasEstado: Record<EstadoProyecto, string> = {
    empezado: 'Empezado',
    'en-proceso': 'En proceso',
    terminado: 'Terminado'
  };

  // Catálogo principal de proyectos mostrado en la portada.
  listaProyectos: Proyecto[] = [
    {
      title: 'GYMZY',
      subtitle: 'PROYECTO FINAL(DAM)',
      description: 'Aplicacion movil enfocada al sector fitness con herramientas para usuarios, entrenadores personales y nutricionistas autonomos.',
      technologies: ['Java', 'Spring Boot', 'Android Studio', 'Firebase'],
      enlaceRepositorio: 'https://github.com/danielbl-67/gymzy',
      tipoIcono: 'movil',
      estado: 'en-proceso',
      anio: '2026'
    },
    {
      title: 'PELUQUERIA DANIEL',
      subtitle: 'GESTION DE SERVICIOS(Prueba de concepto)',
      description: 'Plataforma para reservar citas en tiempo real, administrar agendas y organizar servicios para peluquerías.',
      technologies: ['Java', 'Spring Boot', 'H2 Database', 'Web'],
      enlaceRepositorio: 'https://github.com/danielbl-67/peluqueria',
      enlaceDemo: 'https://peluqueria-daniel.vercel.app',
      tipoIcono: 'barber',
      estado: 'en-proceso',
      anio: '2026'
    },
    {
      title: 'REAPER BOT',
      subtitle: 'ARQUITECTURA Y LOGICA DE BOT',
      description: 'Modulo backend centrado en logica pura y patrones de diseno multiplataforma estructurados bajo estandares de DAM.',
      technologies: ['Java', 'Node.js','Bot', 'Discord'],
      enlaceRepositorio: 'https://github.com/danielbl-67/reaper',
      tipoIcono: 'codigo',
      estado: 'empezado',
      anio: '2026'
    }
  ];

  get proyectosFiltrados(): Proyecto[] {
    if (this.filtroActivo === 'todos') {
      return this.listaProyectos;
    }

    return this.listaProyectos.filter((proyecto) => proyecto.estado === this.filtroActivo);
  }

  establecerFiltroProyecto(filtro: FiltroProyecto): void {
    this.filtroActivo = filtro;
  }

  obtenerEtiquetaEstado(estado: EstadoProyecto): string {
    return this.etiquetasEstado[estado];
  }

  obtenerCantidadEstado(filtro: FiltroProyecto): number {
    if (filtro === 'todos') {
      return this.listaProyectos.length;
    }

    return this.listaProyectos.filter((proyecto) => proyecto.estado === filtro).length;
  }

  establecerBloqueEnfoque(bloque: BloqueEnfoque): void {
    this.bloqueEnfoqueActivo = bloque;
  }

  obtenerBloqueEnfoqueActivo(): BloqueEnfoqueContenido {
    return this.bloquesEnfoque.find((bloque) => bloque.value === this.bloqueEnfoqueActivo) ?? this.bloquesEnfoque[0];
  }
}