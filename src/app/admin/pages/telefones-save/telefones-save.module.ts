import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrMaskerModule } from 'br-mask';

import { TelefonesSavePageRoutingModule } from './telefones-save-routing.module';
import { TelefonesSavePage } from './telefones-save.page';

@NgModule({
  imports: [SharedModule, BrMaskerModule, TelefonesSavePageRoutingModule],
  declarations: [TelefonesSavePage]
})
export class TelefonesSavePageModule {}
