import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
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
import { IndexService } from './services/index.service';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { LoginService } from './services/login.service';
import { AccountGuard } from './guard/account.guard';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
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
    ParallaxComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [IndexService, AccountGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
