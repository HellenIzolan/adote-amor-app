import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from '../../components/components.module';

import { TelefonesPageRoutingModule } from './telefones-routing.module';
import { TelefonesPage } from './telefones.page';

@NgModule({
  imports: [SharedModule, ComponentsModule, TelefonesPageRoutingModule],
  declarations: [TelefonesPage]
})
export class TelefonesPageModule {}
