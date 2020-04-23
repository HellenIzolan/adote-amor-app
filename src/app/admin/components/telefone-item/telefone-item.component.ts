import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Telefone } from '../../models/telefone.model';

@Component({
  selector: 'app-telefone-item',
  templateUrl: './telefone-item.component.html',
  styleUrls: ['./telefone-item.component.scss']
})
export class TelefoneItemComponent {
  @Input() telefone: Telefone;
  @Output() update = new EventEmitter<Telefone>();
  @Output() delete = new EventEmitter<Telefone>();
}
