import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConteudosPageRoutingModule } from './conteudos-routing.module';
import { ConteudosPage } from './conteudos.page';

@NgModule({
  imports: [SharedModule, ConteudosPageRoutingModule, ComponentsModule],
  declarations: [ConteudosPage]
})
export class ConteudosPageModule {}
