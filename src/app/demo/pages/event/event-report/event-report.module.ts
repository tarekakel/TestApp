import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../../../theme/shared/shared.module';
import { NgbCarouselModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { DataTablesModule } from 'angular-datatables';
import { EventReportComponent } from './event-report.component';
import { EventReportRoutingModule } from './event-report-routing.module';

@NgModule({
    declarations: [EventReportComponent],
    imports: [
        CommonModule,
        EventReportRoutingModule,
        SharedModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgbCarouselModule,
        LightboxModule,
        DataTablesModule
    ]
})
export class EventReportModule { }
