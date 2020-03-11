import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosOngPage } from './dados-ong.page';

const routes: Routes = [
  {
    path: '',
    component: DadosOngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosOngPageRoutingModule {}
