import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      //   {
      //     path: 'card',
      //     loadChildren: () => import('./users-card/users-card.module').then(module => module.VehicleCardModule)
      //   },
      {
        path: 'list',
        loadChildren: () =>
          import('./location-list/location-list.module').then(
            (module) => module.LocationListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationRoutingModule {}
