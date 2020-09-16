import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  arrProyectos: Project[]; /* Este array de proyectos lo consultaremos con lo que nos traigamos del back */
  constructor(private httpClient: HttpClient) {

    this.arrProyectos = [
      {
        nombre: 'JavierLuqueBernier',
        descripcion: 'Esto es un curriculum',
        imagenes: [],
        url: 'https://twitter.com/Sr_kelevra',
        ano: 2015,
        cliente: 'Yo mismo',
        urlClient: 'https://twitter.com/Sr_kelevra',
        categoria: 'web',
        tecnologias: 'de todo un poco',
      }
    ];
  }

  getProjects() {
    return this.arrProyectos;
  }
}
