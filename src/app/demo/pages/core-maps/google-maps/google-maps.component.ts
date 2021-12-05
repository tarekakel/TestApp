import { MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VehicleDto } from 'src/app/demo/_models/VehicleDto';
import { VehicleService } from 'src/app/demo/_services/VehicleService';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GoogleMapsComponent implements OnInit {
  lat: number = 25.276987;
  lng: number = 55.296249;
  latA = 21.7613308;
  lngA = 71.6753074;
  zoom = 8;
  subscription: Subscription = new Subscription();
  MarkerClusterer: any;
  vehiclesInfo: VehicleDto[] = [];
  redVehiclesInfo: VehicleDto[] = [];
  greenVehiclesInfo: VehicleDto[] = [];
  greyVehiclesInfo: VehicleDto[] = [];
  yellowVehilesInfo: VehicleDto[] = [];
  tableVehiclesInfo: VehicleDto[] = [];
  serachVehilesInfo: VehicleDto[] = [];

  data: any[] = [];
  green_data: any;
  grey_data: any;
  red_data: any;
  yellow_data: any;

  styles: any = [
    {
      featureType: 'all',
      stylers: [
        {
          saturation: -80,
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        {
          hue: '#00ffee',
        },
        {
          saturation: 50,
        },
      ],
    },
    {
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
  ];

  constructor(
    private vehicleService: VehicleService,
    public mapsAPILoader: MapsAPILoader,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllData(true);
  }

  getAllData(setPageFlag: boolean) {
    this.subscription = timer(0, 30000)
      .pipe(switchMap(() => this.vehicleService.getAllVehicleLocations()))
      .subscribe((res) => {
        this.vehiclesInfo = res;

        this.redVehiclesInfo = new Array<VehicleDto>();
        this.greenVehiclesInfo = new Array<VehicleDto>();
        this.greyVehiclesInfo = new Array<VehicleDto>();
        this.yellowVehilesInfo = new Array<VehicleDto>();
        this.serachVehilesInfo = new Array<VehicleDto>();

        for (var i = 0; i < this.vehiclesInfo.length; i++) {
          if (this.vehiclesInfo[i].reporting == false) {
            this.greyVehiclesInfo.push(this.vehiclesInfo[i]); // not reporting and appear grey
          } else if (
            this.vehiclesInfo[i].idle == false &&
            this.vehiclesInfo[i].reporting == true &&
            this.vehiclesInfo[i].vehicleStatus == 'Active'
          ) {
            this.greenVehiclesInfo.push(this.vehiclesInfo[i]); // moving
          } else if (
            this.vehiclesInfo[i].reporting == true &&
            this.vehiclesInfo[i].engineOn == false &&
            this.vehiclesInfo[i].vehicleStatus == 'Active' &&
            this.vehiclesInfo[i].idle == true
          ) {
            this.redVehiclesInfo.push(this.vehiclesInfo[i]); // stopped
          } else if (
            this.vehiclesInfo[i].engineOn == true &&
            this.vehiclesInfo[i].idle == true &&
            this.vehiclesInfo[i].reporting == true &&
            this.vehiclesInfo[i].vehicleStatus == 'Active'
          ) {
            this.yellowVehilesInfo.push(this.vehiclesInfo[i]); // idle
          }
        }

        this.green_data = this.greenVehiclesInfo.length;
        this.grey_data = this.greyVehiclesInfo.length;
        this.red_data = this.redVehiclesInfo.length;
        this.yellow_data = this.yellowVehilesInfo.length;

        this.tableVehiclesInfo = this.greenVehiclesInfo;
        this.tableVehiclesInfo = this.tableVehiclesInfo.concat(
          this.greyVehiclesInfo
        );
        this.tableVehiclesInfo = this.tableVehiclesInfo.concat(
          this.redVehiclesInfo
        );
        this.tableVehiclesInfo = this.tableVehiclesInfo.concat(
          this.yellowVehilesInfo
        );
        this.serachVehilesInfo = res;

        // console.log(this.greyVehiclesInfo);
        // console.log(this.greenVehiclesInfo);
        // console.log(this.redVehiclesInfo);
        // console.log(this.yellowVehilesInfo);
      });
  }
}
