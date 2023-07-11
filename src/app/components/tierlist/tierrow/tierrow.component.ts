import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-tierrow',
  templateUrl: './tierrow.component.html',
  styleUrls: ['./tierrow.component.scss']
})
export class TierrowComponent {
  @Input() tier: any;
  @Input() tierletter: string = '';
  constructor(private modalService: ModalService) {}
  openModal(data: any) {
    this.modalService.openModal(data);
  }
  showShowInformation(data: any) {
    console.log(data);
  }
}
