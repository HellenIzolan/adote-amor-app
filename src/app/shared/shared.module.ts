import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  //ReactiveFormsModule possibilita a validacao e configuracao do form
  exports: [CommonModule, ReactiveFormsModule, IonicModule]
})
export class SharedModule {}
