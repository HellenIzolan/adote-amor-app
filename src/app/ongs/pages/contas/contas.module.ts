import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { ContasPageRoutingModule } from './contas-routing.module';
import { ContasPage } from './contas.page';

@NgModule({
  imports: [
    SharedModule,
    ContasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ContasPage]
})
export class ContasPageModule {}
