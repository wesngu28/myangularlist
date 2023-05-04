import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TierService {
  private parsedData = new BehaviorSubject<any>(null);

  constructor() { }

  setParsedData(data: any) {
    this.parsedData.next(data);
  }

  getParsedData() {
    return this.parsedData.asObservable();
  }
}