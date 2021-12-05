import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleProfileRoutingModule } from './vehicle-profile-routing.module';
import { VehicleProfileComponent } from './vehicle-profile.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbCarouselModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {LightboxModule} from 'ngx-lightbox';

@NgModule({
  declarations: [VehicleProfileComponent],
  imports: [
    CommonModule,
    VehicleProfileRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule
  ]
})
export class VehicleProfileModule { }
