import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapsRoutingModule } from './google-maps-routing.module';
import { GoogleMapsComponent } from './google-maps.component';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsRoutingModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByETi5G2LcFTWJy5I3G5zltjmhcWhFAfE',
      libraries: ['places', 'drawing', 'geometry', 'visualization'],
    }),
    AgmDirectionModule,
    AgmJsMarkerClustererModule, // agm-direction
  ],
  declarations: [GoogleMapsComponent],
})
export class GoogleMapsModule {}
