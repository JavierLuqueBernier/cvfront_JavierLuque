import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {

  proyecto: Project;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.obtenerProyectoId(params.id);
    });
  }

  async obtenerProyectoId(pId) {
    this.proyecto = await this.projectService.getProjectById(pId);
  }

}
