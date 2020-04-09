import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupsSavePage } from './popups-save.page';

const routes: Routes = [
  {
    path: '',
    component: PopupsSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupsSavePageRoutingModule {}
