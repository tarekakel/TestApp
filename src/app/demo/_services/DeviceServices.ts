import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { DeviceDto } from '../_models/DeviceDto';
import { DeviceFilter } from '../_models/DeviceFilter';
import { DeviceLog } from '../_models/DeviceLog';

@Injectable()
export class DeviceService extends BaseService {
  constructor() {
    super();
  }

  getAllDevice() {
    return this.apiHelper.get<DeviceDto>('/devices/getall');
  }
  searchDeviceLogs(searchCriteria: SearchCriteria<DeviceFilter>) {
    return this.apiHelper.post<SearchCriteria<DeviceFilter>, DeviceLog[]>(
      '/devices/search',
      searchCriteria
    );
  }
}
