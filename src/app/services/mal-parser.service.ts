import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { list } from '../mock-list';
import { UsernameService } from './username.service';

interface rating {rating: string, title: string, title_eng: string, url: string, img: string}

@Injectable({
  providedIn: 'root'
})
export class MalParserService {

  constructor(private usernameService: UsernameService) { }

  async malparse(username: string, listtype: string) {
    const maltext = list
    this.usernameService.setUsername(username)
    // const link = `https://maledge.vercel.app/api/list?user=${username}&type=${listtype}`;
    // const malhtml = await fetch(link)
    // const maltext = await malhtml.json()
    return new Observable(observer => {
      observer.next(maltext);
      observer.complete();
    })
  }
}
