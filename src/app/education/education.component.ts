import { Component, Input, OnInit } from '@angular/core';
interface IEducation {
  Matric: IEducationDetail,
  Intermediate: IEducationDetail,
  Degree: IEducationDetail
}
interface IEducationDetail {
  qualification: string,
  board: string,
  institute: string,
  cgpa: string,
  percentage:string,
  year: number,
  state: string,
  stream: string
}
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() education: IEducation | null= null;
}
