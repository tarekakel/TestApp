import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../theme/shared/shared.module';
import {
  NgbCarouselModule,
  NgbDropdownModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { AlarmListComponent } from './alarm-list.component';
import { AlarmListRoutingModule } from './alarm-list-routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [AlarmListComponent],
  imports: [
    CommonModule,
    AlarmListRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbCarouselModule,
    LightboxModule,
    SharedModule,
    NgbDropdownModule,
    TreeModule,
    ButtonModule,
    ToastModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
})
export class AlarmListModule {}
