import { Component, HostListener, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  showData: any;
  showModal: boolean = false;
  malLink: string = "";
  image: string = "";

  constructor(public modalService: ModalService) {
    this.modalService.showModal$.subscribe((showModal: boolean) => {
      this.showModal = showModal;
      this.showData = JSON.parse(this.modalService.showData);
      this.malLink = `https://myanimelist.net${this.showData.url}`
      this.image = this.showData.img;
    });
  }

  closeModal() {
    this.modalService.closeModal()
  }

  @HostListener('document:click', ['$event'])
  onModalClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.id === "modal") this.showModal = false
  }
}
