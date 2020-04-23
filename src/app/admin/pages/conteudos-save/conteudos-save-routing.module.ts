import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConteudosSavePage } from './conteudos-save.page';

const routes: Routes = [
  {
    path: '',
    component: ConteudosSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConteudosSavePageRoutingModule {}
