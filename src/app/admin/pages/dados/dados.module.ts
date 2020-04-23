import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';
import { BrMaskerModule } from 'br-mask';

import { DadosPageRoutingModule } from './dados-routing.module';
import { DadosPage } from './dados.page';

@NgModule({
  imports: [SharedModule, ComponentsModule, BrMaskerModule, DadosPageRoutingModule],
  declarations: [DadosPage]
})
export class DadosPageModule {}
