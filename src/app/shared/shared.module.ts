import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  //ReactiveFormsModule possibilita a validacao e configuracao do form
  imports: [IonicModule],
  declarations: [LogoutButtonComponent],
  exports: [CommonModule, ReactiveFormsModule, IonicModule, LogoutButtonComponent]
})
export class SharedModule {}
