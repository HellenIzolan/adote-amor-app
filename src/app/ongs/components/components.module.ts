import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConteudoItemComponent } from './conteudo-item/conteudo-item.component';
import { AdocaoItemComponent } from './adocao-item/adocao-item.component';

@NgModule({
  declarations: [
    ConteudoItemComponent,
    AdocaoItemComponent
  ],
  imports: [SharedModule],
  exports: [
    ConteudoItemComponent,
    AdocaoItemComponent
  ]
})
export class ComponentsModule {}
