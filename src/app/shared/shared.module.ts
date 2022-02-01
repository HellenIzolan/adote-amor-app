import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  //ReactiveFormsModule possibilita a validacao e configuracao do form
  imports: [IonicModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule]
})
export class SharedModule {}
