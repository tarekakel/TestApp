import { BaseService } from '../framework/core/base-service.service';
import { Injectable } from '@angular/core';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { Vehicle } from '../_models/Vehicle';
import { LivePosition } from '../_models/LivePosition';
import { AlarmFilter } from '../_models/AlarmFilter';
import { AlarmDto } from '../_models/AlarmDto';

@Injectable()
export class AlarmService extends BaseService {
  constructor() {
    super();
  }

  getByCode(code: number): any {
    return this.apiHelper.get<Vehicle>(
      '/vehicle/get-vehicle-by-code' + '/' + code
    );
  }
  getLivePositionByVehicleCode(code: number): any {
    return this.apiHelper.get<LivePosition>(
      '/vehicle/get-live-position-by-vehiclecode' + '/' + code
    );
  }
  getTotalVehiclesNumber(): any {
    return this.apiHelper.get<number>('/vehicle/get-total-vehicles');
  }

  getAllAlarms(searchCriteria: any): any {
    return this.apiHelper.post<SearchCriteria<AlarmFilter>, AlarmDto>(
      '/alarm/search',
      searchCriteria
    );
  }

  getAllVehicleLocations(): any {
    return this.apiHelper.get<AlarmDto[]>(
      '/vehicle/get-all-vehicles-locations'
    );
  }
  export(filter: any): any {
    return this.apiHelper.post<any, any>('/alarm/export', filter);
  }
}
