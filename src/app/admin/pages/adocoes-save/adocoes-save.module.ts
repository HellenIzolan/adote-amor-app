import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { AdocoesSavePageRoutingModule } from './adocoes-save-routing.module';
import { AdocoesSavePage } from './adocoes-save.page';

@NgModule({
  imports: [SharedModule, AdocoesSavePageRoutingModule],
  declarations: [AdocoesSavePage]
})
export class AdocoesSavePageModule {}
