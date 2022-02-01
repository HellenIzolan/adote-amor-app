import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Conteudo } from '../../models/conteudo.model';

@Component({
  selector: 'app-conteudo-item',
  templateUrl: './conteudo-item.component.html',
  styleUrls: ['./conteudo-item.component.scss']
})
export class ConteudoItemComponent {
  @Input() conteudo: Conteudo;
}
