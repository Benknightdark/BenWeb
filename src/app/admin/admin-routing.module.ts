import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { SkillformComponent } from './skillform/skillform.component';

const routes: Routes = [ {
  path: 'admin', component: AdminlayoutComponent, children: [
    {
      path: 'skillform/create', component: SkillformComponent
    },
    {
      path: 'skillform/detail/:id', component: SkillformComponent
    },
    {
      path: 'skillform/edit/:id', component: SkillformComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
