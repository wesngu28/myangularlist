import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface rating {rating: string, title: string, title_eng: string, url: string, img: string}

@Injectable({
  providedIn: 'root'
})
export class MalParserService {

  constructor() { }

  async malparse(username: string, listtype: string) {
    const link = `https://maledge.vercel.app/api/list?user=${username}&type=${listtype}`;
    const malhtml = await fetch(link)
    const maltext = await malhtml.json()
    return new Observable(observer => {
      observer.next(maltext);
      observer.complete();
    })
  }
}
