import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dados } from '../../models/dados.model';

@Component({
  selector: 'app-dados-item',
  templateUrl: './dados-item.component.html',
  styleUrls: ['./dados-item.component.scss']
})
export class DadosItemComponent {
  @Input() dados: Dados;
  @Output() update = new EventEmitter<Dados>();
}
