import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';

@Component({
  standalone: false,
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  readonly education = PORTFOLIO_DATA.education;
}
