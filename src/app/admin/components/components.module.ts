import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConteudoItemComponent } from './conteudo-item/conteudo-item.component';
import { DadosItemComponent } from './dados-item/dados-item.component';
import { MarketingItemComponent } from './marketing-item/marketing-item.component';
import { PopupItemComponent } from './popup-item/popup-item.component';
import { TelefoneItemComponent } from './telefone-item/telefone-item.component';

@NgModule({
  declarations: [ConteudoItemComponent, DadosItemComponent, MarketingItemComponent, PopupItemComponent, TelefoneItemComponent],
  imports: [SharedModule],
  exports: [ConteudoItemComponent, DadosItemComponent, MarketingItemComponent, PopupItemComponent, TelefoneItemComponent]
})
export class ComponentsModule {}
