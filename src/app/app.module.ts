import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexslideComponent } from './indexslide/indexslide.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ParallaxComponent } from './shared/parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,

    NavbarComponent,
    IndexslideComponent,
    AboutmeComponent,
    SkillComponent,
    ExperienceComponent,
    ContactComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
