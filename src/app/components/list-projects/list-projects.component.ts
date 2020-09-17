import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  arrProyectos: Project[];
  arrCategorias: string[];

  constructor(private projectServices: ProjectsService) {
     /* Aqui llamamos a la funcion del servicio y me traigo el array */
   }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  async obtenerProyectos() {
    this.arrProyectos = await this.projectServices.getAllProjects();
    console.log(this.arrProyectos);
    this.arrCategorias = this.arrProyectos.map(proyecto => {
      return proyecto.categoria;
    });
    console.log(this.arrCategorias);
  }


}
