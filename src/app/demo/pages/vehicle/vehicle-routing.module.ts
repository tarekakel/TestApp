import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./vehicle-profile/vehicle-profile.module').then(module => module.VehicleProfileModule)
      },
    //   {
    //     path: 'card',
    //     loadChildren: () => import('./users-card/users-card.module').then(module => module.VehicleCardModule)
    //   },
      {
        path: 'list',
        loadChildren: () => import('./vehicle-list/vehicle-list.module').then(module => module.VehicleListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
