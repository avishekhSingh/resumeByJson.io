import { Component, Input, OnInit } from '@angular/core';
interface IFrontendDetail{
  projectName:string,
  projectWork:string,
  github:string
}

interface Iproject {

}
@Component({
  selector: 'app-front-end-projects',
  templateUrl: './front-end-projects.component.html',
  styleUrls: ['./front-end-projects.component.css']
})
export class FrontEndProjectsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
  }

  @Input() frontendProject:Array<IFrontendDetail> | [] =[];
  
}
