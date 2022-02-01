import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Adocao } from '../../models/adocao.model';

@Component({
  selector: 'app-adocao-item',
  templateUrl: './adocao-item.component.html',
  styleUrls: ['./adocao-item.component.scss']
})
export class AdocaoItemComponent {
  @Input() adocao: Adocao;
}
