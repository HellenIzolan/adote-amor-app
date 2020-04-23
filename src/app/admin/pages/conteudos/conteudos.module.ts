import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConteudosPageRoutingModule } from './conteudos-routing.module';
import { ConteudosPage } from './conteudos.page';

@NgModule({
  imports: [
    SharedModule,
    ConteudosPageRoutingModule
  ],
  declarations: [ConteudosPage]
})
export class ConteudosPageModule {}
