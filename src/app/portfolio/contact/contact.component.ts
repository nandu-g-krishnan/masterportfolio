import { Component } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';

@Component({
  standalone: false,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  readonly profile = PORTFOLIO_DATA.profile;
  readonly linkedInUrl = this.profile.socialLinks.find((social) => social.platform === 'LinkedIn')?.url ?? '';
  readonly githubUrl = this.profile.socialLinks.find((social) => social.platform === 'GitHub')?.url ?? '';
  readonly contactChannels = [
    { label: 'LinkedIn', subtitle: 'Professional network', url: this.linkedInUrl, icon: 'fa-linkedin' },
    { label: 'GitHub', subtitle: 'Code portfolio', url: this.githubUrl, icon: 'fa-github' }
  ];

  openEmailDraft(name: string, email: string, subject: string, message: string): void {
    const preparedSubject = encodeURIComponent(subject || `Portfolio inquiry from ${name || 'a recruiter'}`);
    const preparedBody = encodeURIComponent(
      `Name: ${name || '-'}\nEmail: ${email || '-'}\n\n${message || 'Hi Nandu, I would like to connect.'}`
    );
    window.location.href = `mailto:${this.profile.email}?subject=${preparedSubject}&body=${preparedBody}`;
  }
}
