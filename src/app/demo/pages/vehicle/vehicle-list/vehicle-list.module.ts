import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleListRoutingModule } from './vehicle-list-routing.module';
import { VehicleListComponent } from './vehicle-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbCarouselModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {LightboxModule} from 'ngx-lightbox';
import { DataTablesModule } from 'angular-datatables';

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
    DataTablesModule
  ]
})
export class VehicleListModule { }
