import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { MarketingSavePageRoutingModule } from './marketing-save-routing.module';
import { MarketingSavePage } from './marketing-save.page';

@NgModule({
  imports: [SharedModule, MarketingSavePageRoutingModule],
  declarations: [MarketingSavePage]
})
export class MarketingSavePageModule {}
