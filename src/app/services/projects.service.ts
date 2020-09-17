import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  arrProyectos: Project[]; /* Este array de proyectos lo consultaremos con lo que nos traigamos del back */
  baseUrl: string;
  constructor(private httpClient: HttpClient) { /* HttpClient nos servira para poder hacer las peticiones */
    this.baseUrl = 'https://cvback-javierluque.herokuapp.com/api/proyectos';
    this.getToken();
  }

  getToken(): void {
    let objetoToken: any;
    this.httpClient.get('https://cvback-javierluque.herokuapp.com/api/token')/* esto es un observable */.subscribe( valor => {
      objetoToken = valor;
      console.log(objetoToken);
      localStorage.setItem('token', objetoToken.token);
    });
  }

  getAllProjects()/* getAllProject nos devuelve una promesa que gestionaremos en el componente> */: Promise<Project[]> {
    return this.httpClient.get<Project[]>(this.baseUrl)/* esto es un observable y debemos cambiarlo a promesa */.toPromise();
  }
}
