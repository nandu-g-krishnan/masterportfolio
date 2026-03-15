import { Component, ElementRef, HostListener } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly profile = PORTFOLIO_DATA.profile;
  menuOpen = false;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.menuOpen) {
      return;
    }

    const target = event.target as Node | null;
    if (target && !this.host.nativeElement.contains(target)) {
      this.menuOpen = false;
    }
  }

  onNavLinkClick(): void {
    this.menuOpen = false;
  }

  onToggleMenu(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.menuOpen = !this.menuOpen;
  }
}
