import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OngsPage } from './ongs.page';

const routes: Routes = [
  {
    path: ':url_site',
    component: OngsPage
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OngsRoutingModule {}
