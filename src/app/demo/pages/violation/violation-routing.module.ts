import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'report',
        loadChildren: () => import('./violation-report/violation-report.component').then(module => module.ViolationReportComponent)
      },
    //   {
    //     path: 'card',
    //     loadChildren: () => import('./users-card/users-card.module').then(module => module.VehicleCardModule)
    //   },
      {
        path: 'list',
        loadChildren: () => import('./violation-list/violation-list.component').then(module => module.ViolationListComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViolationRoutingModule { }
