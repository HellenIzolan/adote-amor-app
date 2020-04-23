import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { PopupsSavePageRoutingModule } from './popups-save-routing.module';
import { PopupsSavePage } from './popups-save.page';

@NgModule({
  imports: [SharedModule, PopupsSavePageRoutingModule],
  declarations: [PopupsSavePage]
})
export class PopupsSavePageModule {}
