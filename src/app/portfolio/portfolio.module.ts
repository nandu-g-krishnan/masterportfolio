import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { IntroComponent } from './intro/intro.component';



@NgModule({
  declarations: [HeaderComponent, PortfolioComponent, IntroComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ]
})
export class PortfolioModule { }
