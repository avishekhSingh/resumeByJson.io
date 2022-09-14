import { Component } from '@angular/core';
import { CurrentInfoComponent } from './current-info/current-info.component';
import {PersonalInfoComponent} from "./personal-info/personal-info.component"
import { GetResumeService } from "./Services/get-resume.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'resumeByJson';

  resume:any;
  personInformation:any;
  skill: any;
  projects: any;
  frontendProjects:any;
  education: any;
  accomplishment:any;
  declaration:any;

  constructor(private myResume: GetResumeService) {                //! create a variable myResume with data type "GetResumeService"
    
    myResume.getData().subscribe((element):void => {
      this.resume = element;
      this.personInformation = this.resume[0].Person;
      this.skill = this.resume[1].Skill;
      this.education = this.resume[2].Education;
      this.projects = this.resume[3].Project;
      this.frontendProjects=this.resume[4].Frontend_Projects;
      this.accomplishment=this.resume[5].Curricular;
      this.declaration=this.resume[6].Declaration;

      console.log(typeof this.resume)
    })
  }

  date=new Date();

  currentDate:string=`0${this.date.getDate()}/0${this.date.getMonth()+1}/${this.date.getFullYear()}`
  currentInfo:object={
    date:this.currentDate,
    currentLocation:"Bhopal"
  }

}
