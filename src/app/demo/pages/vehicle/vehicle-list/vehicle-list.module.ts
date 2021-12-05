import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleListRoutingModule } from './vehicle-list-routing.module';
import { VehicleListComponent } from './vehicle-list.component';
import { SharedModule } from '../../../../theme/shared/shared.module';
import {
  NgbCarouselModule,
  NgbDropdownModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [VehicleListComponent],
  imports: [
    CommonModule,
    VehicleListRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule,
  ],
})
export class VehicleListModule {}
