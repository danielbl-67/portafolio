import { Component } from '@angular/core';
import { AboutComponent } from './components/about.component/about.component';
import { ProjectsComponent } from './components/projects.component/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'portafolio';
}
