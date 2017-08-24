import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { SkillformComponent } from './skillform/skillform.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminlayoutComponent, SkillformComponent]
})
export class AdminModule { }
