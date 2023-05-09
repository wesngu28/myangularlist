import { Component, OnInit } from '@angular/core';
import { TierService } from 'src/app/services/tier.service';

@Component({
  selector: 'app-tierlist',
  templateUrl: './tierlist.component.html',
  styleUrls: ['./tierlist.component.scss']
})
export class TierlistComponent implements OnInit {
  parsedData: any;
  tiers: any;

  constructor(private tierService: TierService) {}

  ngOnInit(): void {
    this.tierService.getParsedData().subscribe(data => { 
      this.parsedData = data 
      this.tiers = this.generateTiers(data)
    })
  }

  generateTiers(data: any[]): any[] {
    let tiers = data.reduce((tiers: any[], item: any) => {
      const tierIndex = tiers.findIndex((tier: any) => tier.name === item.tier);
      if (tierIndex === -1) {
        tiers.push({ name: item.tier, data: [item] });
      } else {
        tiers[tierIndex].data.push(item);
      }
      return tiers;
    }, []);
    tiers.sort((a, b) => a.name.localeCompare(b.name));
    const sTierIndex = tiers.findIndex((tier: any) => tier.name === 'S');
    if (sTierIndex !== -1) {
      const sTier = tiers.splice(sTierIndex, 1)[0];
      tiers.unshift(sTier);
    }
    console.log(tiers)
    return tiers;
  }
}
