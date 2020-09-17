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
  }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  async obtenerProyectos() {
    this.arrProyectos = await this.projectServices.getAllProjects();
    console.log(this.arrProyectos);
    const arrayString = this.arrProyectos.map(proyecto => {
      return proyecto.categoria;
    });
    this.arrCategorias = Array.from(new Set(arrayString));
    console.log(this.arrCategorias);
  }


}
