import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ObjectiveComponent } from './objective/objective.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CurrentInfoComponent } from './current-info/current-info.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    HobbiesComponent,
    ObjectiveComponent,
    PersonalInfoComponent,
    ProjectsComponent,
    SkillsComponent,
    CurrentInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
