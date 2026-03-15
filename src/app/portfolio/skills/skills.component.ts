import { Component } from '@angular/core';

interface SkillWebNode {
  name: string;
  iconClass: string;
  iconType: 'devicon' | 'fa';
  x: number;
  y: number;
  delayMs: number;
}

@Component({
  standalone: false,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  readonly hubX = 500;
  readonly hubY = 320;
  readonly viewWidth = 1000;
  readonly viewHeight = 620;
  private readonly orbitRadius = 268;

  readonly skillNodes: SkillWebNode[] = this.buildSkillNodes();

  readonly categories = ['Frontend', 'Backend', 'Cloud / DevOps', 'Tools'];
  readonly skillTracks = this.categories;

  trackByName(_: number, node: SkillWebNode): string {
    return node.name;
  }

  toPercentX(value: number): number {
    return (value / this.viewWidth) * 100;
  }

  toPercentY(value: number): number {
    return (value / this.viewHeight) * 100;
  }

  private buildSkillNodes(): SkillWebNode[] {
    const base = [
      { name: 'Azure', iconClass: 'devicon-azure-plain', iconType: 'devicon' as const },
      { name: 'GitHub', iconClass: 'fa-github', iconType: 'fa' as const },
      { name: 'Angular', iconClass: 'devicon-angularjs-plain', iconType: 'devicon' as const },
      { name: '.NET', iconClass: 'devicon-dotnetcore-plain', iconType: 'devicon' as const },
      { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain', iconType: 'devicon' as const },
      { name: 'Azure DevOps', iconClass: 'devicon-azuredevops-plain', iconType: 'devicon' as const },
      { name: 'Postman', iconClass: 'devicon-postman-plain', iconType: 'devicon' as const },
      { name: 'TypeScript', iconClass: 'devicon-typescript-plain', iconType: 'devicon' as const },
      { name: 'JavaScript', iconClass: 'devicon-javascript-plain', iconType: 'devicon' as const },
      { name: 'HTML5', iconClass: 'devicon-html5-plain', iconType: 'devicon' as const },
      { name: 'CSS3', iconClass: 'devicon-css3-plain', iconType: 'devicon' as const },
      { name: 'Jira', iconClass: 'devicon-jira-plain', iconType: 'devicon' as const }
    ];

    const step = (Math.PI * 2) / base.length;
    const start = -Math.PI / 2;

    return base.map((item, index) => {
      const angle = start + index * step;
      const x = Math.round(this.hubX + this.orbitRadius * Math.cos(angle));
      const y = Math.round(this.hubY + this.orbitRadius * Math.sin(angle));

      return {
        ...item,
        x,
        y,
        delayMs: 120 + index * 70
      };
    });
  }
}
