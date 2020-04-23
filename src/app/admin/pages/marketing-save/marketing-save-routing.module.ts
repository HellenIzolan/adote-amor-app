import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketingSavePage } from './marketing-save.page';

const routes: Routes = [
  {
    path: '',
    component: MarketingSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketingSavePageRoutingModule {}
