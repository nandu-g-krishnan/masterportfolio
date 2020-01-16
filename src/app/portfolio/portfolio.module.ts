import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [HeaderComponent, PortfolioComponent, IntroComponent, FooterComponent, AboutComponent, ExperienceComponent, ContactComponent, EducationComponent, SkillsComponent, ProjectsComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ]
})
export class PortfolioModule { }
