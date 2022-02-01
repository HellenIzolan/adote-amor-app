import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { SiteRoutingModule } from './site-routing.module';

import { SitePage } from './site.page';

@NgModule({
  declarations: [SitePage],
  imports: [SharedModule, SiteRoutingModule]
})
export class SiteModule {}
