import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PortfolioModule} from './portfolio/portfolio.module';
import {PortfolioComponent} from './portfolio/portfolio.component';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { EducationComponent } from './portfolio/education/education.component';
import { ContactComponent } from './portfolio/contact/contact.component';
import { AboutComponent } from './portfolio/about/about.component';
import { ModalModule } from 'ngx-bootstrap/modal';


const routes: Routes = [
  {path: '', component: PortfolioComponent,
   children: [
    {path: 'about', component: AboutComponent},
     {path: 'skill', component: SkillsComponent},
     {path: 'projects', component: ProjectsComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'education', component: EducationComponent},
    {path: 'contact', component: ContactComponent},
   ]
},
];
const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioModule,
    RouterModule.forRoot(routes, config),
    BrowserAnimationsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
