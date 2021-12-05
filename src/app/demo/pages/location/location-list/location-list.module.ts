import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { NgbCarouselModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { DataTablesModule } from 'angular-datatables';
import { LocationListComponent } from './location-list.component';
import { LocationListRoutingModule } from './location-list-routing.module';

@NgModule({
    declarations: [LocationListComponent],
    imports: [
        CommonModule,
        LocationListRoutingModule,
        SharedModule,
        NgbDropdownModule,
        NgbTooltipModule,
        NgbCarouselModule,
        LightboxModule,
        DataTablesModule
    ]
})
export class LocationListModule { }
