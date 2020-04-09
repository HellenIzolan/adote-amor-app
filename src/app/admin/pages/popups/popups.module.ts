import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PopupsPageRoutingModule } from './popups-routing.module';
import { PopupsPage } from './popups.page';

@NgModule({
  imports: [SharedModule, PopupsPageRoutingModule, ComponentsModule],
  declarations: [PopupsPage]
})
export class PopupsPageModule {}
