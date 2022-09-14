import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { EducationComponent } from './education/education.component';
import { ObjectiveComponent } from './objective/objective.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CurrentInfoComponent } from './current-info/current-info.component';
import { CurricularActivityComponent } from './curricular-activity/curricular-activity.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { FrontEndProjectsComponent } from './front-end-projects/front-end-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    ObjectiveComponent,
    PersonalInfoComponent,
    ProjectsComponent,
    SkillsComponent,
    CurrentInfoComponent,
    CurricularActivityComponent,
    DeclarationComponent,
    FrontEndProjectsComponent,
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
