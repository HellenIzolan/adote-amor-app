import { NgModule } from '@angular/core';
import { DadosPageRoutingModule } from './dados-routing.module';
import { DadosPage } from './dados.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, DadosPageRoutingModule],
  declarations: [DadosPage]
})
export class DadosPageModule {}
