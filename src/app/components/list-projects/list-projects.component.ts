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

  constructor(private ProjectService: ProjectsService) {
    this.arrProyectos = this.ProjectService.getProjects(); /* Aqui llamamos a la funcion del servicio y me traigo el array */
   }

  ngOnInit(): void {
    console.log(this.arrProyectos);
  }

}
