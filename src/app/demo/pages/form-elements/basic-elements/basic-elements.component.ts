import { Component, OnInit } from '@angular/core';
import { PagedResult } from 'src/app/demo/framework/view-models/grid/paged-result';
import { SearchCriteria } from 'src/app/demo/framework/view-models/grid/search-criteria';
import { Alarm } from 'src/app/demo/_models/Alarm';
import { AlarmDto } from 'src/app/demo/_models/AlarmDto';
import { AlarmFilter } from 'src/app/demo/_models/AlarmFilter';
import { AlarmService } from 'src/app/demo/_services/AlarmService';

@Component({
  selector: 'app-basic-elements',
  templateUrl: './basic-elements.component.html',
  styleUrls: ['./basic-elements.component.scss'],
})
export class BasicElementsComponent implements OnInit {
  alarmList: AlarmDto = new AlarmDto();
  alarms: Alarm[] = [];
  searchCriteria: SearchCriteria<any>;
  pagedResult: PagedResult<AlarmDto>;
  constructor(private alarmService: AlarmService) {
    this.searchCriteria = new SearchCriteria<AlarmFilter>();
    this.searchCriteria.filters = new AlarmFilter();
    this.pagedResult = new PagedResult<AlarmDto>();
    this.pagedResult.collection = new Array<AlarmDto>();
  }

  ngOnInit() {
    this.alarmService
      .getAllAlarms(this.searchCriteria)
      .subscribe((res: AlarmDto) => {
        console.log(res);
        this.alarmList = res;
        this.alarms = this.alarmList.alarmList;
      });
  }
}
