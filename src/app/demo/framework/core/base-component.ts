import { Component, OnInit } from '@angular/core';
import {
  GridPageSize,
  GridRowsPerPageOptions,
  GridPagerPagesCount,
  DateFormat,
  DateYearRange,
  HourFormat,
} from './constants';
import { InjectorService } from '../helpers/injecter-service';
import { Router } from '@angular/router';

@Component({
  template: '',
})
export class BaseComponent implements OnInit {
  gridPageSize: number = GridPageSize;
  gridRowsPerPageOptions: any = GridRowsPerPageOptions;
  gridPagerPagesCount: any = GridPagerPagesCount;
  dateFormat = DateFormat;
  dateYearRange = DateYearRange;
  HourFormat = HourFormat;
  numberOfDays: number = 7;
  // alertService: AlertService;
  router: Router;
  daysNameEn: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  daysNameAr: string[] = [
    'الأحد',
    'الاثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعة',
    'السيت',
  ];

  constructor() {
    //this.alertService = InjectorService.injector.get(AlertService);
    this.router = InjectorService.injector.get(Router);
  }

  ngOnInit() {}
}
