import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContasSavePage } from './contas-save.page';

const routes: Routes = [
  {
    path: '',
    component: ContasSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasSavePageRoutingModule {}
