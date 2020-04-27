import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Marketing } from '../../models/marketing.model';

@Component({
  selector: 'app-marketing-item',
  templateUrl: './marketing-item.component.html',
  styleUrls: ['./marketing-item.component.scss']
})
export class MarketingItemComponent {
  @Input() marketing: Marketing;
  @Output() update = new EventEmitter<Marketing>();
  @Output() delete = new EventEmitter<Marketing>();
}
