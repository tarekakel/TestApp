import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiveStreamingComponent } from './live-streaming.component';

const routes: Routes = [
  {
    path: 'live-stream/:streamingurl',
    component: LiveStreamingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveStreamRoutingModule {}
