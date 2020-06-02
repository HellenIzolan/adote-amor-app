import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Conta } from '../../models/conta.model';

@Component({
  selector: 'app-conta-item',
  templateUrl: './conta-item.component.html',
  styleUrls: ['./conta-item.component.scss']
})
export class ContaItemComponent {
  @Input() conta: Conta;
  @Output() update = new EventEmitter<Conta>();
  @Output() delete = new EventEmitter<Conta>();
}
