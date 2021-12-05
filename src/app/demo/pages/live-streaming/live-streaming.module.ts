import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../../theme/shared/shared.module';
import { LiveStreamingComponent } from './live-streaming.component';
import { LiveStreamRoutingModule } from './live-streaming-routing.module';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [LiveStreamingComponent],
  imports: [
    CommonModule,
    LiveStreamRoutingModule,
    SharedModule,
    TreeModule,
    ButtonModule,
    ToastModule
  ]
})
export class LiveStreamModule { }
