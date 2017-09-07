import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { SkillformComponent } from './skillform/skillform.component';
import { FormsModule } from '@angular/forms';
import { SkillmanageComponent } from './skillmanage/skillmanage.component';
import {IndexService} from '../services/index.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ColorPickerModule,
    FormsModule

  ],
 // providers: [IndexService],

  declarations: [AdminlayoutComponent, SkillformComponent, SkillmanageComponent]
})
export class AdminModule { }
