import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  showData: any;
  showModal: boolean = false;

  constructor(public modalService: ModalService) {
    this.modalService.showModal$.subscribe((showModal: boolean) => {
      this.showModal = showModal;
      this.showData = this.modalService.showData;
    });
  }

  closeModal() {
    this.modalService.closeModal()
  }
}
