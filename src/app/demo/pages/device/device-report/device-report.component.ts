import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BaseComponent } from 'src/app/demo/framework/core/base-component';
import { PagedResult } from 'src/app/demo/framework/view-models/grid/paged-result';
import { SearchCriteria } from 'src/app/demo/framework/view-models/grid/search-criteria';
import { Device } from 'src/app/demo/shared/view-models/Device';
import { DeviceDto } from 'src/app/demo/_models/DeviceDto';
import { DeviceFilter } from 'src/app/demo/_models/DeviceFilter';
import { DeviceLog } from 'src/app/demo/_models/DeviceLog';
import { DeviceModel } from 'src/app/demo/_models/DeviceModel';
import { DeviceService } from 'src/app/demo/_services/DeviceServices';

@Component({
  selector: 'app-device-report',
  templateUrl: './device-report.component.html',
  styleUrls: ['./device-report.component.scss'],
})
export class DeviceReportComponent extends BaseComponent implements OnInit {
  searchCriteria: SearchCriteria<any>;
  pagedResult: PagedResult<DeviceDto>;
  deviceList: DeviceDto = new DeviceDto();
  devices: DeviceModel[] = [];
  dropdownSettings: IDropdownSettings = {};
  dtOptions: any = {};
  button = ['copy', 'excel', 'csv', 'pdf', 'print'];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  deviceCode: string[];
  logList: DeviceLog[] = [];
  selectedItems: Device[] = [];

  constructor(private deviceService: DeviceService) {
    super();
    this.searchCriteria = new SearchCriteria<DeviceFilter>();
    this.searchCriteria.filters = new DeviceFilter();
    this.pagedResult = new PagedResult<DeviceDto>();
    this.pagedResult.collection = new Array<DeviceDto>();
    this.searchCriteria = new SearchCriteria<DeviceFilter>();
    this.searchCriteria.filters = new DeviceFilter();
    this.searchCriteria.filters.endDate = new Date();
    this.searchCriteria.filters.startDate = new Date();
    this.searchCriteria.filters.startDate.setDate(
      this.searchCriteria.filters.startDate.getDate() - 1
    );
    this.deviceCode = new Array();
  }

  override ngOnInit(): void {
    this.deviceService.getAllDevice().subscribe((res) => {
      console.log(res);
      this.deviceList = res;
      this.devices = this.deviceList.deviceList;
    });
    this.searchLogs();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'plateNumber',
      textField: 'registration',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  // adding multiple busses start
  onItemSelect(item: Device) {
    // console.log(item);
    this.deviceCode.push(item.deviceId);
  }
  onSelectAll(items: Device[]) {
    this.deviceCode.splice(0);
    items.forEach((c) => {
      this.deviceCode.push(c.deviceId);
    });
  }
  onDeSelect(items: { deviceId: string }) {
    const index = this.deviceCode.indexOf(items.deviceId);
    this.deviceCode.splice(index, 1);
  }
  onDeSelectAll() {
    this.deviceCode.splice(0);
  }
  // adding multiple busses end
  searchLogs() {
    this.searchCriteria.filters.deviceNumbers = this.deviceCode;
  }
  play() {}
}
