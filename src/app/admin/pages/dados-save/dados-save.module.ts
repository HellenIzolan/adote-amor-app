import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrMaskerModule } from 'br-mask';

import { DadosSavePageRoutingModule } from './dados-save-routing.module';
import { DadosSavePage } from './dados-save.page';

@NgModule({
  imports: [SharedModule, BrMaskerModule, DadosSavePageRoutingModule],
  declarations: [DadosSavePage]
})
export class DadosSavePageModule {}
