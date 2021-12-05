import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../../theme/shared/shared.module';
import {
  NgbCarouselModule,
  NgbDropdownModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { DeviceListComponent } from './device-list.component';
import { DeviceListRoutingModule } from './device-list-routing.module';

@NgModule({
  declarations: [DeviceListComponent],
  imports: [
    CommonModule,
    DeviceListRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule,
  ],
})
export class DeviceListModule {}
