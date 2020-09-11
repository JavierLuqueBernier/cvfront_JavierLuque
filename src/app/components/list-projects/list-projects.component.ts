import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  arrProyecto: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
