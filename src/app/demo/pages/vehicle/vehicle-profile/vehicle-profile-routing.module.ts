import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleProfileComponent } from './vehicle-profile.component';

const routes: Routes = [
  {
    path: '',
    component: VehicleProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleProfileRoutingModule {}
