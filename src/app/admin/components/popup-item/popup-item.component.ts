import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Popup } from '../../models/popup.model';

@Component({
  selector: 'app-popup-item',
  templateUrl: './popup-item.component.html',
  styleUrls: ['./popup-item.component.scss']
})
export class PopupItemComponent {
  @Input() popup: Popup;
  @Output() ativo = new EventEmitter<Popup>();
  @Output() update = new EventEmitter<Popup>();
  @Output() delete = new EventEmitter<Popup>();
}
