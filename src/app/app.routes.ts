import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio.component/inicio.component';
import { SobremiComponent } from './paginas/sobremi.component/sobremi.component';
import { TecnologiasComponent } from './paginas/tecnologias.component/tecnologias.component';
import { ContactoComponent } from './paginas/contacto/contacto';

export const routes: Routes = [
  { path: '', component: InicioComponent }, 
  { path: 'sobre-me', component: SobremiComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];