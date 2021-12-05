import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreamingRoutingModule } from './streaming-routing.module';
import { DownloadStreamingComponent } from './download-streaming/download-streaming.component';
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LightboxModule } from 'ngx-lightbox';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [DownloadStreamingComponent],
  imports: [
    CommonModule,
    StreamingRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule,
    TreeModule,
    ButtonModule,
    ToastModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
})
export class StreamingModule {}
