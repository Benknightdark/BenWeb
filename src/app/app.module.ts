import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EasyPieChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
