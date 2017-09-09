import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { SkillformComponent } from './skillform/skillform.component';
import { SkillmanageComponent } from './skillmanage/skillmanage.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ExperiencemanageComponent } from './experiencemanage/experiencemanage.component';

const routes: Routes = [ {
  path: 'admin', component: AdminlayoutComponent, children: [
    {
      path: 'skillmanage', component: SkillmanageComponent
    },
    {
      path: 'skillform/create', component: SkillformComponent
    },
    {
      path: 'skillform/detail/:id', component: SkillformComponent
    },
    {
      path: 'skillform/edit/:id', component: SkillformComponent
    },
    {
      path: 'experiencemanage', component: ExperiencemanageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
