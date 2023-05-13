import { Component } from '@angular/core';
import { MalParserService } from 'src/app/services/mal-parser.service';
import { TierService } from 'src/app/services/tier.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  title = 'My Anime tierList';
  username = '';
  type = '';
  parsedData = [];

  constructor(private malParserService: MalParserService, private tierService: TierService) {}

  async getData() {
    (await this.malParserService.malparse(this.username, "anime")).subscribe(data => {
      this.tierService.setParsedData(data);
      this.parsedData = data as [];
    });
  }
}
