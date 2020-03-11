import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
