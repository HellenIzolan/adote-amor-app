import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdocoesSavePage } from './adocoes-save.page';

const routes: Routes = [
  {
    path: '',
    component: AdocoesSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdocoesSavePageRoutingModule {}
