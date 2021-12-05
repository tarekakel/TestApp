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
          import('./alarm-list/alarm-list.module').then(
            (module) => module.AlarmListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlarmRoutingModule {}
