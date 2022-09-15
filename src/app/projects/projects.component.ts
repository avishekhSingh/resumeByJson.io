import { Component, OnInit, Input } from '@angular/core';

//! Nested Interface
interface IProjectsDetails {
  projectName: string,
  projectWork: string,
  objective: string
}
interface IProjects {
  CollageProject:IProjectsDetails,
  CollageInternship:IProjectsDetails,
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() projects: IProjects | null = null;
}
