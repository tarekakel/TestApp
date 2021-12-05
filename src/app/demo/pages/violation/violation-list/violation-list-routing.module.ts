import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViolationListComponent} from './violation-list.component';

const routes: Routes = [
  {
    path: '',
    component: ViolationListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViolationListRoutingModule { }
