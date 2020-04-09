import { NgModule } from '@angular/core';
import { PopupItemComponent } from './popup-item/popup-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PopupItemComponent],
  imports: [SharedModule],
  exports: [PopupItemComponent]
})
export class ComponentsModule {}
