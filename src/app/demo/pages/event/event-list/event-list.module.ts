import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../theme/shared/shared.module';
import {
  NgbCarouselModule,
  NgbDropdownModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { EventListComponent } from './event-list.component';
import { EventListRoutingModule } from './event-list-routing.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [EventListComponent],
  imports: [
    CommonModule,
    EventListRoutingModule,
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
export class EventListModule {}
