import { NgModule } from '@angular/core';
import { SharedModule } from '../../../src/app/shared/shared.module';

import { OngsRoutingModule } from './ongs-routing.module';

import { OngsPage } from './ongs.page';

@NgModule({
  declarations: [OngsPage],
  imports: [SharedModule, OngsRoutingModule]
})
export class OngsModule {}
