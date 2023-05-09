import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tierrow',
  templateUrl: './tierrow.component.html',
  styleUrls: ['./tierrow.component.scss']
})
export class TierrowComponent {
  @Input() tier: any;
}
