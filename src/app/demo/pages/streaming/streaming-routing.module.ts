import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TreeComponent } from '../tree/tree.component';
import { DownloadStreamingComponent } from './download-streaming/download-streaming.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'download-stream',
        component: DownloadStreamingComponent,
      },
      {
        path: 'live-streaming',
        component: TreeComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamingRoutingModule {}
