import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  showModal$: Subject<boolean> = new Subject<boolean>();
  showData: any;

  openModal(data: any) {
    this.showData = JSON.stringify(data);
    this.showModal$.next(true);
  }

  closeModal() {
    this.showModal$.next(false);
  }
  constructor() { }
}
