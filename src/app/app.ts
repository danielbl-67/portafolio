import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarranavegacionComponent } from './componentes/barranavegacion.component/barranavegacion.component';
import { ContactoComponent } from "./paginas/contacto/contacto";
import { InicioComponent } from './paginas/inicio.component/inicio.component';
import { SobremiComponent } from './paginas/sobremi.component/sobremi.component';
import { TecnologiasComponent } from './paginas/tecnologias.component/tecnologias.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BarranavegacionComponent,
    InicioComponent,
    SobremiComponent,
    TecnologiasComponent,
    ContactoComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}