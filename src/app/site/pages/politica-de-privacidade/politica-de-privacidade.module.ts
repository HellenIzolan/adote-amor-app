import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PoliticaDePrivacidadePageRoutingModule } from './politica-de-privacidade-routing.module';
import { PoliticaDePrivacidadePage } from './politica-de-privacidade.page';

@NgModule({
  imports: [SharedModule, PoliticaDePrivacidadePageRoutingModule],
  declarations: [PoliticaDePrivacidadePage]
})
export class PoliticaDePrivacidadePageModule {}
