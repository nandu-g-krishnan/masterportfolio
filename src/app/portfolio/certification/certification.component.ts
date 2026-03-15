import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';

@Component({
  standalone: false,
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent {
  readonly certifications = PORTFOLIO_DATA.certifications;
}
