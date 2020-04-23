import { NgModule } from '@angular/core';
import { DadosItemComponent } from './dados-item/dados-item.component';
import { PopupItemComponent } from './popup-item/popup-item.component';
import { TelefoneItemComponent } from './telefone-item/telefone-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DadosItemComponent, PopupItemComponent, TelefoneItemComponent],
  imports: [SharedModule],
  exports: [DadosItemComponent, PopupItemComponent, TelefoneItemComponent]
})
export class ComponentsModule {}
