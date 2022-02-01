import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoliticaDePrivacidadePage } from './politica-de-privacidade.page';

const routes: Routes = [
  {
    path: '',
    component: PoliticaDePrivacidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoliticaDePrivacidadePageRoutingModule {}
