import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EasyPieChartModule } from 'ng2modules-easypiechart';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SkillringComponent } from './skillring/skillring.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexslideComponent } from './indexslide/indexslide.component';
import { AboutmeComponent } from './aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SkillringComponent,
    NavbarComponent,
    IndexslideComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    EasyPieChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
