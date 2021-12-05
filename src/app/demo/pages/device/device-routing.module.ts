import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [

        {
          path: 'report',
          loadChildren: () => import('./device-report/device-report.module').then(module => module.DeviceReportModule)
        },
      {
        path: 'list',
        loadChildren: () => import('./device-list/device-list.module').then(module => module.DeviceListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
