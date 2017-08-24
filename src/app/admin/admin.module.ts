import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { SkillformComponent } from './skillform/skillform.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ColorPickerModule

  ],

  declarations: [AdminlayoutComponent, SkillformComponent]
})
export class AdminModule { }
