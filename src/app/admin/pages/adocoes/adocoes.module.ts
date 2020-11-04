import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { AdocoesPageRoutingModule } from './adocoes-routing.module';
import { AdocoesPage } from './adocoes.page';

@NgModule({
  imports: [SharedModule, AdocoesPageRoutingModule, ComponentsModule],
  declarations: [AdocoesPage]
})
export class AdocoesPageModule {}
