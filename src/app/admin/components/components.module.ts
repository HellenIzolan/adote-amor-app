import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ContaItemComponent } from './conta-item/conta-item.component';
import { ConteudoItemComponent } from './conteudo-item/conteudo-item.component';
import { DadosItemComponent } from './dados-item/dados-item.component';
import { MarketingItemComponent } from './marketing-item/marketing-item.component';
import { AdocaoItemComponent } from './adocao-item/adocao-item.component';
import { TelefoneItemComponent } from './telefone-item/telefone-item.component';

@NgModule({
  declarations: [
    ContaItemComponent,
    ConteudoItemComponent,
    DadosItemComponent,
    MarketingItemComponent,
    AdocaoItemComponent,
    TelefoneItemComponent
  ],
  imports: [SharedModule],
  exports: [
    ContaItemComponent,
    ConteudoItemComponent,
    DadosItemComponent,
    MarketingItemComponent,
    AdocaoItemComponent,
    TelefoneItemComponent
  ]
})
export class ComponentsModule {}
