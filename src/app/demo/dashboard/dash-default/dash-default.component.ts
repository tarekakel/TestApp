import { Component, OnDestroy, OnInit } from '@angular/core';
import { SupportChartData1 } from './chart/support-chart-data-1';
import { SupportChartData2 } from './chart/support-chart-data-2';
import { SeoChart1 } from './chart/seo-chart-1';
import { SeoChart2 } from './chart/seo-chart-2';
import { SeoChart3 } from './chart/seo-chart-3';
import { PowerCardChart1 } from './chart/power-card-chart-1';
import { PowerCardChart2 } from './chart/power-card-chart-2';

import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EventService } from '../../_services/EventService';
import { DashboardService } from '../../_services/DashboardService';
import {
  AlarmsStatsics,
  DashboardDataDto,
  DeviceStatsics,
  VehiclesStatsics,
  ViolationDashboardChart,
  ViolationsStatsics,
} from '../../_models/DashboardDataDto';
import { VehicleDto } from '../../_models/VehicleDto';
import { BaseComponent } from '../../framework/core/base-component';
import { VehicleDriverService } from '../../_services/VehicleDriverService';
import { Driver } from '../../_models/Driver';
import { ApexChartService } from 'src/app/theme/shared/components/chart/apex-chart/apex-chart.service';
import { ChartDB } from '../../widget/widget-chart/chart/chart-data';
import { LinearChart } from '../../_models/ChartsModel';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dash-default',
  templateUrl: './dash-default.component.html',
  styleUrls: ['./dash-default.component.scss'],
})
export class DashDefaultComponent implements OnInit, OnDestroy {
  public supportChartData1: any;
  public supportChartData2: any;
  public seoChartData1: any;
  public seoChartData2: any;
  public seoChartData3: any;
  public powerCardChartData1: any;
  public powerCardChartData2: any;
  public deviceProgressBar: any;
  public vehicleProgressBar: any;
  public userProgressBar: any;
  subscription: Subscription = new Subscription();
  subscription2: Subscription = new Subscription();
  subscription3: Subscription = new Subscription();
  subscription4: Subscription = new Subscription();
  subscription5: Subscription = new Subscription();
  dashboardData: DashboardDataDto | undefined;
  piedata: DashboardDataDto | undefined;
  allEventsData: any;
  eventsShiftData: any;
  vehicleData: VehicleDto[] = [];
  idleVehicles: VehicleDto[] = [];
  activeVehicle: VehicleDto[] = [];
  geofenceViolation: VehicleDto[] = [];
  stoppedVehicles: VehicleDto[] = [];
  notReporting: VehicleDto[] = [];
  currentDate: Date;
  overSpeedDuration: any = '10:41:20';
  sealBelt: any = 0;
  sealBealDuration: any = '00:00:00';
  tripsDuration: any = '2415:19:21';
  criticalDrivers: any[] = [];
  criticalVehicles: any[] = [];
  drivers: Driver[] = [];
  counto: any[] = [];
  vehiclesStats = new VehiclesStatsics();
  violationStats = new ViolationsStatsics();
  alarmsStats = new AlarmsStatsics();
  deviceStats = new DeviceStatsics();
  violationChartData: ViolationDashboardChart[] = [];
  violationDailyChartData: LinearChart[] = [];
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
  public slideOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };
  public chartDB: any;

  public lastDate: number;
  public line2CAC: any;
  public data: any;

  public intervalSub: any;
  public intervalMain: any;

  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;

  constructor(
    private dashboardService: DashboardService,
    private eventService: EventService,
    private driverService: VehicleDriverService,
    public apexEvent: ApexChartService
  ) {
    // super();
    this.currentDate = new Date();
    this.supportChartData1 = SupportChartData1.supportChartData;
    this.supportChartData2 = SupportChartData2.supportChartData;
    this.seoChartData1 = SeoChart1.seoChartData;
    this.seoChartData2 = SeoChart2.seoChartData;
    this.seoChartData3 = SeoChart3.seoChartData;
    this.powerCardChartData1 = PowerCardChart1.powerCardChartData;
    this.powerCardChartData2 = PowerCardChart2.powerCardChartData;
    this.deviceProgressBar = [
      {
        type: 'success',
        value: 66,
      },
      {
        type: 'primary',
        value: 1,
      },
      {
        type: 'danger',
        value: 33,
      },
    ];
    this.userProgressBar = [
      {
        type: 'success',
        value: 66,
      },
      {
        type: 'primary',
        value: 1,
      },
      {
        type: 'danger',
        value: 33,
      },
    ];
    this.chartDB = ChartDB;

    this.lastDate = 0;
    this.data = [];

    this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
      min: 10,
      max: 90,
    });
    this.line2CAC = {
      chart: {
        height: 300,
        type: 'line',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 2000,
          },
        },
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      series: [
        {
          data: this.data,
        },
      ],
      colors: ['#4680ff'],
      title: {
        text: 'Dynamic Updating Chart',
        align: 'left',
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: 'datetime',
        range: 777600000,
      },
      yaxis: {
        max: 100,
      },
      legend: {
        show: false,
      },
    };

    this.dailyVisitorStatus = '1y';
  }

  ngOnInit(): void {
    this.initAllData();
    // this.subscription = timer(0, 100000)
    //   .pipe(switchMap(() => this.dashboardService.getViolationData()))
    //   .subscribe(
    //     (res) => {
    //       console.log(res);
    //       this.piedata = res;
    //       this.allEventsData =
    //         res.dashboardDataList[this.currentDate.getMonth()];
    //       this.vehicleData = res.vehicleList;
    //       this.notReporting = new Array();
    //       this.activeVehicle = new Array();
    //       this.stoppedVehicles = new Array();
    //       this.idleVehicles = new Array();
    //       this.geofenceViolation = new Array();
    //       this.vehicleProgressBar = [
    //         {
    //           type: 'success',
    //           value: 66,
    //         },
    //         {
    //           type: 'primary',
    //           value: 1,
    //         },
    //         {
    //           type: 'danger',
    //           value: 33,
    //         },
    //       ];
    //       this.userProgressBar = [
    //         {
    //           type: 'success',
    //           value: 66,
    //         },
    //         {
    //           type: 'primary',
    //           value: 1,
    //         },
    //         {
    //           type: 'danger',
    //           value: 33,
    //         },
    //       ];
    //   for (var i = 0; i < this.vehicleData.length; i++) {
    //     if (this.vehicleData[i].reporting == false) {
    //         this.notReporting.push(this.vehicleData[i]);  // not reporting and appear grey
    //     }
    //     else if (this.vehicleData[i].idle == false &&
    //       this.vehicleData[i].reporting == true &&
    //       this.vehicleData[i].vehicleStatus == "Active" ) {
    //         this.activeVehicle.push(this.vehicleData[i]);  // moving
    //     } else if (this.vehicleData[i].reporting == true && this.vehicleData[i].engineOn == false &&
    //       this.vehicleData[i].vehicleStatus == "Active" && this.vehicleData[i].idle == true) {
    //         this.stoppedVehicles.push(this.vehicleData[i]);     // stopped
    //     }else if (this.vehicleData[i].engineOn == true && this.vehicleData[i].idle == true
    //       && this.vehicleData[i].reporting ==true && this.vehicleData[i].vehicleStatus == "Active") {
    //         this.idleVehicles.push(this.vehicleData[i]);    // idle
    //     }
    //     if(this.vehicleData[i].isGeofenceEnabled){
    //       this.geofenceViolation.push(this.vehicleData[i]);
    //     }
    // }
    // this.over_speed_duration = res.dashboardDataList[this.current_date.getMonth()].totalOverspeeding;
    // this.trips_duration = res.dashboardDataList[this.current_date.getMonth()].totalTrips;
    //   },
    //   (error) => {}
    // );
    //  this.subscription3 = timer(0,400000).pipe(switchMap(()=> this.DashboardService.getCriticalDrivers())).subscribe(
    //   res => {
    //     this.criticalDrivers = res;
    //   });
    //   this.subscription5 = timer(0,400000).pipe(switchMap(()=> this.driverService.GetallDriver())).subscribe(
    //     res => {
    //       this.drivers = res;
    //     });
    //  this.subscription4 = timer(0,400000).pipe(switchMap(()=>this.DashboardService.getCriticalVehicles())).subscribe(
    //   res => {
    //     this.criticalVehicles = res;
    //   });
    // this.intervalSub = setInterval(() => {
    //   this.getNewSeries(this.lastDate, { min: 10, max: 90 });
    //   this.apexEvent.eventChangeSeriesData();
    // }, 2000);
    // this.intervalMain = setInterval(() => {
    //   this.resetData();
    //   this.apexEvent.eventChangeSeriesData();
    // }, 60000);
  }
  initAllData(): void {
    this.getVehicleStats();
    this.getViolationStats();
    this.getAlarmsStats();
    this.getDeviceStats();
    this.getViolationChartData();
  }
  dailyVisitorEvent(status: string): void {
    this.dailyVisitorStatus = status;
    switch (status) {
      case '1m':
        this.dailyVisitorAxis = {
          min: new Date('28 Jan 2013').getTime(),
          max: new Date('27 Feb 2013').getTime(),
        };
        break;
      case '6m':
        this.dailyVisitorAxis = {
          min: new Date('27 Sep 2012').getTime(),
          max: new Date('27 Feb 2013').getTime(),
        };
        break;
      case '1y':
        this.dailyVisitorAxis = {
          min: new Date('27 Feb 2012').getTime(),
          max: new Date('27 Feb 2013').getTime(),
        };
        break;
      case 'ytd':
        this.dailyVisitorAxis = {
          min: new Date('01 Jan 2013').getTime(),
          max: new Date('27 Feb 2013').getTime(),
        };
        break;
      case 'all':
        this.dailyVisitorAxis = {
          min: undefined,
          max: undefined,
        };
        break;
    }

    setTimeout(() => {
      this.apexEvent.eventChangeTimeRange();
    });
  }
  getNewSeries(baseval: number, yrange: { max: number; min: number }): void {
    const newDate = baseval + 86400000;
    this.lastDate = newDate;
    this.data.push({
      x: newDate,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
    });
  }
  resetData(): void {
    this.data = this.data.slice(this.data.length - 10, this.data.length);
  }
  ngOnDestroy(): void {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
    if (this.intervalMain) {
      clearInterval(this.intervalMain);
    }
  }
  getDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { min: any; max: any }
  ): void {
    let i = 0;
    while (i < count) {
      const x = baseval;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      this.data.push({ x, y });
      this.lastDate = baseval;
      baseval += 86400000;
      i++;
    }
  }

  countoChange($event: number, i: number): void {
    this.counto[i] = Math.round($event);
  }
  onCountoEnd(): void {}
  getVehicleStats(): void {
    this.dashboardService
      .getVehiclesStatsics()
      .subscribe((data) => (this.vehiclesStats = data));
  }
  getViolationStats(): void {
    this.dashboardService
      .getViolationStatsics()
      .subscribe((data) => (this.violationStats = data));
  }

  getAlarmsStats(): void {
    this.dashboardService
      .getAlarmsStatsics()
      .subscribe((data) => (this.alarmsStats = data));
  }

  getDeviceStats(): void {
    this.dashboardService
      .getDeviceStatsics()
      .subscribe((data) => (this.deviceStats = data));
  }
  getViolationChartData(): void {
    this.dashboardService.getDashboardViolationChart().subscribe((data) => {
      this.violationChartData = data;
      this.multi = data;
      console.log(data);
    });
  }
  multi: any[] = [];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  // constructor() {
  //   Object.assign(this, { multi });
  // }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  //    this.dashboardService.getAlarmsStatsics().subscribe(console.log);
}
