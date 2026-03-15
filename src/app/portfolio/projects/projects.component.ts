import { Component, TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PORTFOLIO_DATA } from '../data/portfolio.data';


@Component({
  standalone: false,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  modalRef?: BsModalRef;
  readonly professionalProjects = PORTFOLIO_DATA.professionalProjects;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<unknown>): void {
    this.modalRef = this.modalService.show(template, { class: 'gray modal-lg' });
  }
}
