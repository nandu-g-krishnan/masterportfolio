import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AboutComponent } from './about/about.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollRevealDirective } from './directives/scroll-reveal.directive';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { PortfolioComponent } from './portfolio.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PortfolioComponent,
    IntroComponent,
    FooterComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    CertificationComponent,
    ScrollRevealDirective
  ],
  imports: [CommonModule, NgxSpinnerModule]
})
export class PortfolioModule {}
