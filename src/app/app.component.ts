import { Component } from '@angular/core';
import { GetResumeService } from "./Services/get-resume.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resumeByJson';

  resume: any = [];
  person: any;
  skill: any;
  projects: any;
  education: any;

  constructor(private myResume: GetResumeService) {                //! create a variable myResume with data type "GetResumeService"
    myResume.getData().subscribe((element) => {
      this.resume = element;
      this.person = this.resume[0].Person;
      this.skill = this.resume[1].Skill;
      this.education = this.resume[2].Education;
      this.projects = this.resume[3].Project;
    })
  }

  date=new Date();

  currentDate:string=`0${this.date.getDate()}/0${this.date.getMonth()+1}/${this.date.getFullYear()}`
  currentInfo:object={
    "date":this.currentDate,
    "currentLocation":"Bhopal"
  }

}
