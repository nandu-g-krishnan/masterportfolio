import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';

@Component({
  standalone: false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  readonly otherSocialLinks = PORTFOLIO_DATA.profile.otherSocialLinks ?? [];
}
