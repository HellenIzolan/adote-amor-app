import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelefonesSavePage } from './telefones-save.page';

const routes: Routes = [
  {
    path: '',
    component: TelefonesSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelefonesSavePageRoutingModule {}
