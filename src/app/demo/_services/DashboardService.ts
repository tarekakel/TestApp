import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { EventFilter } from '../_models/EventFilter';
import { EventHistory } from '../_models/EventHistory';
import { VehicleDto } from '../_models/VehicleDto';
import { VehicleFilter } from '../_models/VehicleFilter';
import {
  AlarmsStatsics,
  DashboardDataDto,
  DeviceStatsics,
  VehiclesStatsics,
  ViolationDashboardChart,
  ViolationsStatsics,
} from './../_models/DashboardDataDto';
import { EventDto } from './../_models/EventDto';

@Injectable()
export class DashboardService extends BaseService {
  constructor() {
    super();
  }
  getDashboardData(vehicleFilter: VehicleFilter): Observable<VehicleDto[]> {
    return this.apiHelper.post<VehicleFilter, VehicleDto[]>(
      '/dashboard/get-vehicles-dashboard',
      vehicleFilter
    );
  }
  getDashboardElivatedData(
    vehicleFilter: VehicleFilter
  ): Observable<VehicleDto[]> {
    return this.apiHelper.post<VehicleFilter, VehicleDto[]>(
      '/dashboard/get-Elivated-vehicles-dashboard',
      vehicleFilter
    );
  }
  getDashboardNormalData(
    vehicleFilter: VehicleFilter
  ): Observable<VehicleDto[]> {
    return this.apiHelper.post<VehicleFilter, VehicleDto[]>(
      '/dashboard/get-Normal-vehicles-dashboard',
      vehicleFilter
    );
  }
  getDashboardIdleData(vehicleFilter: VehicleFilter): Observable<VehicleDto[]> {
    return this.apiHelper.post<VehicleFilter, VehicleDto[]>(
      '/dashboard/get-Idle-vehicles-dashboard',
      vehicleFilter
    );
  }
  getAllDashBoardData() {
    return this.apiHelper.get<DashboardDataDto>(
      '/dashboard/get-All-DashBoardData'
    );
  }

  getViolationData(): Observable<any> {
    return this.apiHelper.get<any>('/dashboard/get-All-ViolationData');
  }
  getTripData() {
    return this.apiHelper.get<any>('/dashboard/get-All-TripData');
  }
  getDriverData() {
    return this.apiHelper.get<any>('/dashboard/get-All-DriverData');
  }
  getScoreSetUpData() {
    return this.apiHelper.get<any>('/dashboard/get-All-ScoreSetUpData');
  }
  getLivePositionData() {
    return this.apiHelper.get<any>('/dashboard/get-All-LivePositionData');
  }
  getCriticalDrivers(): Observable<any> {
    return this.apiHelper.get<any>('/dashboard/get-Critical-Drivers');
  }
  getCriticalVehicles(): Observable<any> {
    return this.apiHelper.get<any>('/dashboard/get-Critical-Vehicles');
  }
  GetEventsDashboard(
    searchCriteria: SearchCriteria<EventFilter>
  ): Observable<EventDto> {
    return this.apiHelper.post<SearchCriteria<EventFilter>, EventDto>(
      '/dashboard/get-events-dashboard',
      searchCriteria
    );
  }
  GetEventHistory(
    searchCriteria: SearchCriteria<EventFilter>
  ): Observable<EventHistory[]> {
    return this.apiHelper.post<SearchCriteria<EventFilter>, EventHistory[]>(
      '/dashboard/get-events-history',
      searchCriteria
    );
  }
  getVehiclesStatsics(): Observable<VehiclesStatsics> {
    return this.apiHelper.get<VehiclesStatsics>(
      '/dashboard/get-vehicles-dash-statsics'
    );
  }

  getViolationStatsics(): Observable<ViolationsStatsics> {
    return this.apiHelper.get<ViolationsStatsics>(
      '/dashboard/get-violation-dash-statsics'
    );
  }
  getAlarmsStatsics(): Observable<AlarmsStatsics> {
    return this.apiHelper.get<AlarmsStatsics>(
      '/dashboard/get-alarms-dash-statsics'
    );
  }

  getDeviceStatsics(): Observable<DeviceStatsics> {
    return this.apiHelper.get<DeviceStatsics>(
      '/dashboard/get-device-dash-statsics'
    );
  }
  getDashboardViolationChart(
    type = 'Daily'
  ): Observable<ViolationDashboardChart[]> {
    return this.apiHelper.get<ViolationDashboardChart[]>(
      '/dashboard/get-violations-dash-chart' + '/' + type
    );
  }
}
