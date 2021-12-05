import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../../../theme/shared/shared.module';
import { NgbCarouselModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';
import { DataTablesModule } from 'angular-datatables';
import { DeviceListComponent } from './device-list.component';
import { DeviceListRoutingModule } from './device-list-routing.module';
import { TreeNodeCheckedPipe } from '../../tree/TreeNodeCheckedPipe';
import { TreeNodeSearchPipe } from '../../tree/TreeNodeSearchPipe';
import { TreeView } from '../../tree/TreeView';
import { TreeComponent } from '../../tree/tree.component';

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
        DataTablesModule,
    
    ]
})
export class DeviceListModule { }
