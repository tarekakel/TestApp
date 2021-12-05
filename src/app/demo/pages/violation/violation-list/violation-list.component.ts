import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Subject } from 'rxjs-compat';
import { BaseComponent } from 'src/app/demo/framework/core/base-component';
import { AuthService } from 'src/app/demo/framework/helpers/auth.service';
import { PagedResult } from 'src/app/demo/framework/view-models/grid/paged-result';
import { SearchCriteria } from 'src/app/demo/framework/view-models/grid/search-criteria';
import { Address } from 'src/app/demo/_models/Address';
import { Driver } from 'src/app/demo/_models/Driver';
import { EventDto } from 'src/app/demo/_models/EventDto';
import { EventFilter } from 'src/app/demo/_models/EventFilter';
import { EventLog } from 'src/app/demo/_models/EventLog';
import { EventMedia } from 'src/app/demo/_models/EventMedia';
import { EventReclassification } from 'src/app/demo/_models/EventReclassification';
import { VehicleDto } from 'src/app/demo/_models/VehicleDto';
import { EventService } from 'src/app/demo/_services/EventService';
import { VehicleDriverService } from 'src/app/demo/_services/VehicleDriverService';
import { VehicleService } from 'src/app/demo/_services/VehicleService';

@Component({
  selector: 'app-violation-list',
  templateUrl: './violation-list.component.html',
  styleUrls: ['./violation-list.component.scss']
})
export class ViolationListComponent extends BaseComponent implements OnInit {


  constructor() {
     
    super();
   
  }
      ngOnInit(): void {
       
      }
      


}
