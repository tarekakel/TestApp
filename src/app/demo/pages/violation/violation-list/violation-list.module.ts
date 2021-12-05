import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViolationListRoutingModule } from './violation-list-routing.module';
import { ViolationListComponent } from './violation-list.component';
import {SharedModule} from '../../../../theme/shared/shared.module';
import {NgbCarouselModule, NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {LightboxModule} from 'ngx-lightbox';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [ViolationListComponent],
  imports: [
    CommonModule,
    ViolationListRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule,
    DataTablesModule
  ]
})
export class ViolationListModule { }
