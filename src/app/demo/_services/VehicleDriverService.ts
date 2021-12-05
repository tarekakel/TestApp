import { BaseService } from '../framework/core/base-service.service';
import { Injectable } from '@angular/core';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { PagedResult } from '../framework/view-models/grid/paged-result';
import { Driver } from '../_models/Driver';
import { DriverFilter } from '../_models/DriverFilter';
import { LivePosition } from '../_models/LivePosition';
import { VehicleDto } from '../_models/VehicleDto';
import { DriverDto } from '../_models/driverDto';
import { EventFilter } from './../_models/EventFilter';
import { UnknownDriverLogs } from './../_models/UnknownDriverLogs';

@Injectable()
export class VehicleDriverService extends BaseService {
  constructor() {
    super();
  }

  getByCode(code: number) {
    return this.apiHelper.get<DriverDto>(
      '/driver/get-driver-by-code' + '/' + code
    );
  }
  getLivePositionByVehicleCode(code: number) {
    return this.apiHelper.get<LivePosition>(
      '/vehicle/get-live-position-by-vehiclecode' + '/' + code
    );
  }
  getTotalVehiclesNumber() {
    return this.apiHelper.get<number>('/vehicle/get-total-vehicles');
  }

  search(searchCriteria: SearchCriteria<DriverFilter>) {
    return this.apiHelper.post<
      SearchCriteria<DriverFilter>,
      PagedResult<Driver>
    >('/driver/search', searchCriteria);
  }

  getAllVehicleLocations() {
    return this.apiHelper.get<VehicleDto[]>(
      '/vehicle/get-all-vehicles-locations'
    );
  }

  getVehiclesEventsByClassificationId(vehicleFilter: DriverFilter) {
    return this.apiHelper.post<DriverFilter, VehicleDto[]>(
      '/vehicle/get-vehicles-events-by-classificationId',
      vehicleFilter
    );
  }

  addDriver(newDriver: Driver) {
    return this.apiHelper.post<Driver, Driver>('/driver/add-driver', newDriver);
  }

  GetallDrivers(entityId: string) {
    return this.apiHelper.get<Driver[]>(
      '/driver/get-driver-by-entity' + '/' + entityId
    );
  }

  GetallDriver() {
    return this.apiHelper.get<Driver[]>('/driver/driverList');
  }

  getDriverStatistics(searchCriteria: SearchCriteria<DriverFilter>) {
    return this.apiHelper.post<SearchCriteria<DriverFilter>, DriverDto[]>(
      '/driver/get-statistics-by-code',
      searchCriteria
    );
  }
  searchUnknownDriverLogs(searchCriteria: SearchCriteria<EventFilter>) {
    return this.apiHelper.post<
      SearchCriteria<EventFilter>,
      UnknownDriverLogs[]
    >('/eventlogs/get-events-logs', searchCriteria);
  }
  assignTag(newDriver: Driver) {
    return this.apiHelper.post<Driver, Driver>('/driver/add-driver', newDriver);
  }
}
