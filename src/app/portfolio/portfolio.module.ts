import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio.component';
import { NgxSpinnerModule } from '../../../node_modules/ngx-spinner';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, PortfolioComponent, IntroComponent, FooterComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ]
})
export class PortfolioModule { }
