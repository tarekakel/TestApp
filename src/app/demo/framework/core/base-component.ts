import { Component, OnInit, Injector, ReflectiveInjector } from '@angular/core';
import * as Constants from './Constants';
import { InjectorService } from '../helpers/injecter-service';
import { AlertService } from './../helpers/alert.service';
import { Router } from '@angular/router';

@Component({
  template: ''
})
export class BaseComponent implements OnInit {

  gridPageSize: number = Constants.GridPageSize;
  gridRowsPerPageOptions: any = Constants.GridRowsPerPageOptions;
  gridPagerPagesCount: any = Constants.GridPagerPagesCount;
  dateFormat = Constants.DateFormat;
  dateYearRange = Constants.DateYearRange;
  HourFormat = Constants.HourFormat;
  numberOfDays: number = 7;
 // alertService: AlertService;
  router: Router; 
  daysNameEn: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  daysNameAr: string[] = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السيت'];

  constructor() {


    //this.alertService = InjectorService.injector.get(AlertService);
    this.router = InjectorService.injector.get(Router);
  }

  ngOnInit() {   
  }
}
