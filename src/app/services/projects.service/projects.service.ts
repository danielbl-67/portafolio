import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private jsonUrl = 'projects.json'; // Angular lee directo de la carpeta public

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.jsonUrl);
  }
}