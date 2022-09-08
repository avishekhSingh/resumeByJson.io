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
  person: any = []
  skill: any;
  projects: any;
  education: any;
  currentInfo: any;

  constructor(private myResume: GetResumeService) {                //! create a variable myResume with data type "GetResumeService"
    myResume.getData().subscribe((element) => {
      this.resume = element;
      console.log(this.resume[3].Project)

      this.person = this.resume[0].Person;
      this.skill = this.resume[1].Skill;
      this.education = this.resume[2].Education;
      this.projects = this.resume[3].Project;
      this.currentInfo = this.resume;
    })
  }


}
