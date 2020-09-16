import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  arrProyectos: Project[]; /* Este array de proyectos lo consultaremos con lo que nos traigamos del back */
  baseUrl: string;
  constructor(private httpClient: HttpClient) { /* HttpClient nos servira para poder hacer las peticiones */
    this.baseUrl = 'https://cvback-javierluque.herokuapp.com/api/proyectos';
  }

  getToken(): void {
    let objetoToken: any;
    this.httpClient.get('https://cvback-javierluque.herokuapp.com/api/token').subscribe( valor => {
      objetoToken = valor;
      console.log(objetoToken);
    });
    /* esto es un observable, asique hay que subscribirse */
  }

  getProjects() {
    return this.arrProyectos;
  }
}
