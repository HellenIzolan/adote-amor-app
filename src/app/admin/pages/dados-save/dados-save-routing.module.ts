import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosSavePage } from './dados-save.page';

const routes: Routes = [
  {
    path: '',
    component: DadosSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosSavePageRoutingModule {}
