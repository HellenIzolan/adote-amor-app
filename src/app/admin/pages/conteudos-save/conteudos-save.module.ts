import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConteudosSavePageRoutingModule } from './conteudos-save-routing.module';
import { ConteudosSavePage } from './conteudos-save.page';

@NgModule({
  imports: [SharedModule, ConteudosSavePageRoutingModule],
  declarations: [ConteudosSavePage]
})
export class ConteudosSavePageModule {}
