import { NgModule } from '@angular/core';
import { DadosOngPageRoutingModule } from './dados-ong-routing.module';
import { DadosOngPage } from './dados-ong.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, DadosOngPageRoutingModule],
  declarations: [DadosOngPage]
})
export class DadosOngPageModule {}
