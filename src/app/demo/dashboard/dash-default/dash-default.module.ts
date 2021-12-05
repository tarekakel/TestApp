import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashDefaultRoutingModule } from './dash-default-routing.module';
import { DashDefaultComponent } from './dash-default.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import {
  NgbDropdownModule,
  NgbProgressbarModule,
} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import CountoModule from 'angular2-counto';

@NgModule({
  declarations: [DashDefaultComponent],
  imports: [
    CommonModule,
    DashDefaultRoutingModule,
    SharedModule,
    NgbProgressbarModule,
    NgbDropdownModule,
    CarouselModule,
    CountoModule,
    NgxChartsModule,
  ],
})
export class DashDefaultModule {}
