import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../theme/shared/shared.module';
import {
  NgbCarouselModule,
  NgbDropdownModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { DeviceReportComponent } from './device-report.component';
import { DeviceReportRoutingModule } from './device-report-routing.module';

@NgModule({
  declarations: [DeviceReportComponent],
  imports: [
    CommonModule,
    DeviceReportRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule,
  ],
})
export class DeviceReportModule {}
