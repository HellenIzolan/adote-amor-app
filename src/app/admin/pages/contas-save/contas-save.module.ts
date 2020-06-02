import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ContasSavePageRoutingModule } from './contas-save-routing.module';

import { ContasSavePage } from './contas-save.page';

@NgModule({
  imports: [
    SharedModule,
    ContasSavePageRoutingModule
  ],
  declarations: [ContasSavePage]
})
export class ContasSavePageModule {}
