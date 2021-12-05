import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlarmListComponent } from './alarm-list.component';

const routes: Routes = [
  {
    path: '',
    component: AlarmListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlarmListRoutingModule {}
