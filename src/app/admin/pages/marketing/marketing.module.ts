import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { MarketingPageRoutingModule } from './marketing-routing.module';
import { MarketingPage } from './marketing.page';

@NgModule({
  imports: [SharedModule, MarketingPageRoutingModule, ComponentsModule],
  declarations: [MarketingPage]
})
export class MarketingPageModule {}
