import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';

const routes: Routes = [ {
  path: 'admin', component: AdminlayoutComponent, children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
