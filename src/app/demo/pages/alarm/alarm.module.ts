import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlarmRoutingModule } from './alarm-routing.module';
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { LightboxModule } from 'ngx-lightbox';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AlarmListComponent } from './alarm-list/alarm-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlarmRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule,
    DataTablesModule,
    TreeModule,
    ButtonModule,
    ToastModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
})
export class AlarmModule {}
