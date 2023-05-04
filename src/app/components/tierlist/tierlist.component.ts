import { Component, OnInit } from '@angular/core';
import { TierService } from 'src/app/services/tier.service';

@Component({
  selector: 'app-tierlist',
  templateUrl: './tierlist.component.html',
  styleUrls: ['./tierlist.component.scss']
})
export class TierlistComponent implements OnInit {
  parsedData: any;

  constructor(private tierService: TierService) {}

  ngOnInit(): void {
    this.tierService.getParsedData().subscribe(data => { this.parsedData = data })
  }
}
