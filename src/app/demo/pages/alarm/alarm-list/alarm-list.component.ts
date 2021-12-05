import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PagedResult } from 'src/app/demo/framework/view-models/grid/paged-result';
import { SearchCriteria } from 'src/app/demo/framework/view-models/grid/search-criteria';
import { Alarm } from 'src/app/demo/_models/Alarm';
import { AlarmDto } from 'src/app/demo/_models/AlarmDto';
import { AlarmFilter } from 'src/app/demo/_models/AlarmFilter';
import { GroupMaster } from 'src/app/demo/_models/GroupMaster';
import { VehicleDto, VehicleSummary } from 'src/app/demo/_models/VehicleDto';
import { AlarmService } from 'src/app/demo/_services/AlarmService';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { ExportService } from 'src/app/demo/_services/export.service';
import { EventService } from 'src/app/demo/_services/EventService';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.scss'],
})
export class AlarmListComponent implements OnInit, OnDestroy {
  searchCriteria: SearchCriteria<any>;
  pagedResult: PagedResult<AlarmDto>;
  alarmList: AlarmDto;
  alarms: Alarm[];
  vehiclesInfo: VehicleDto[];
  groupList: any[];
  selectedItems: VehicleDto[];
  groupSeletedItems: GroupMaster[];
  eventSeletedItems: any[];
  vehicleCode: string[];
  groupCode: number[];
  dropdownSettings: IDropdownSettings = {};
  dropdownGroupSettings: IDropdownSettings = {};
  dropdownEventTypeSettings: IDropdownSettings = {};
  tableVehiclesInfo: VehicleSummary;
  loading = false;
  totalRecords = 0;
  items: MenuItem[];
  constructor(
    private alarmService: AlarmService,
    private exportService: ExportService,
    private eventService: EventService
  ) {
    this.searchCriteria = new SearchCriteria<AlarmFilter>();
    this.searchCriteria.filters = new AlarmFilter();
    this.pagedResult = new PagedResult<AlarmDto>();
    this.pagedResult.collection = new Array<AlarmDto>();
  }
  ngOnInit(): void {
    this.loading = true;

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'plateNumber',
      textField: 'registration',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.dropdownGroupSettings = {
      singleSelection: true,
      idField: 'groupId',
      textField: 'groupName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    this.items = [
      {
        label: 'Excel',
        icon: 'pi pi-file-excel',
        command: () => {
          this.exportExcel();
        },
      },
      { separator: true },
      {
        label: 'PDF',
        icon: 'pi pi-file-pdf',
        command: () => {
          this.exportPdf();
        },
      },
    ];
  }
  ngOnDestroy(): void {
    // this.dtTrigger.unsubscribe();
  }
  onGroupSelect(item: GroupMaster): void {
    if (this.vehiclesInfo.length === 0) {
      this.vehiclesInfo = this.tableVehiclesInfo.vehicles;
    }
    this.groupCode.push(item.groupId);
    this.vehiclesInfo = this.vehiclesInfo.filter(
      (c) => c.groupName === item.groupName
    );
  }
  onGroupSelectAll(items: GroupMaster[]): void {
    this.groupCode.splice(0);
    items.forEach((c) => {
      this.groupCode.push(c.groupId);
    });
  }
  onGroupDeSelect(items): void {
    this.vehiclesInfo = this.tableVehiclesInfo.vehicles;
    const index = this.groupCode.indexOf(items.groupId);
    this.groupCode.splice(index, 1);
  }
  onGroupDeSelectAll(items): void {
    this.vehiclesInfo = this.tableVehiclesInfo.vehicles;
    this.groupCode.splice(0);
  }
  searchAlarms(): void {
    this.loading = true;
    this.alarmService.getAllAlarms(this.searchCriteria).subscribe((result) => {
      this.alarmList = result;
      this.alarms = result.alarmList;
      this.loading = false;
    });
  }
  loadAlarms(event: LazyLoadEvent): void {
    this.loading = true;
    event.filters = this.searchCriteria.filters;
    this.alarmService.getAllAlarms(event).subscribe((res) => {
      this.alarmList = res;
      this.alarms = res.alarmList;
      this.loading = false;
      this.totalRecords = res.totalAlarms;
    });
  }
  exportExcel(): void {
    this.alarmService.export(this.searchCriteria).subscribe((data) => {
      console.log(data);
      this.exportService.exportExcel(data, 'Alarms Details');
    });
  }
  exportPdf(): void {
    const exportData = [];
    this.alarmService.export(this.searchCriteria).subscribe((data) => {
      data.forEach((element) => {
        exportData.push(Object.values(element));
      });

      this.exportService.exportPdf(Object.keys(data[0]), exportData);
    });
  }
  initAllData(): void {
    this.eventService.getGroupMaster().subscribe(
      (res) => {
        this.groupList = res;
      },
      (error) => {}
    );
  }
  save(): void {}
}
