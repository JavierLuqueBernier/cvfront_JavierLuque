import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  arrProyectos: Project[]; /* Este array de proyectos lo consultaremos con lo que nos traigamos del back */
  constructor() { 

    this.arrProyectos = new Array(
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
    );
  }

  getProjects() {
    return this.arrProyectos;
  }
}
