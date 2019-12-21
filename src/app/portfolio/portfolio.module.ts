import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio.component';



@NgModule({
  declarations: [HeaderComponent, PortfolioComponent],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
