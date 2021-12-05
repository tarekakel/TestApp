import { BaseService } from '../framework/core/base-service.service';
import { Injectable } from '@angular/core';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { Vehicle } from '../_models/Vehicle';
import { VehicleFilter } from '../_models/VehicleFilter';
import { LivePosition } from '../_models/LivePosition';
import { VehicleDto, VehicleSummary } from '../_models/VehicleDto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VehicleService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getByCode(code: number): Observable<Vehicle> {
    return this.apiHelper.get<Vehicle>(
      '/vehicle/get-vehicle-by-code' + '/' + code
    );
  }
  getLivePositionByVehicleCode(code: number): Observable<LivePosition> {
    return this.apiHelper.get<LivePosition>(
      '/vehicle/get-live-position-by-vehiclecode' + '/' + code
    );
  }
  getTotalVehiclesNumber(): Observable<number> {
    return this.apiHelper.get<number>('/vehicle/get-total-vehicles');
  }

  search(searchCriteria: any): Observable<VehicleSummary> {
    return this.apiHelper.post<SearchCriteria<any>, VehicleSummary>(
      '/vehicle/search',
      searchCriteria
    );
  }

  getAllVehicleLocations(): Observable<VehicleDto[]> {
    return this.apiHelper.get<VehicleDto[]>(
      '/vehicle/get-all-vehicles-locations'
    );
  }

  getVehiclesEventsByClassificationId(
    vehicleFilter: VehicleFilter
  ): Observable<VehicleDto[]> {
    return this.apiHelper.post<VehicleFilter, VehicleDto[]>(
      '/vehicle/get-vehicles-events-by-classificationId',
      vehicleFilter
    );
  }

  addVehicle(newVehicle: Vehicle): Observable<Vehicle> {
    return this.apiHelper.post<Vehicle, Vehicle>(
      '/vehicle/add-vehicle',
      newVehicle
    );
  }

  getAllVehiclesByEntity(entityCode: string): Observable<Vehicle[]> {
    return this.apiHelper.get<Vehicle[]>(
      '/vehicle/get-all-vehicles-entityWise' + '/' + entityCode
    );
  }
  getAllVehicles(): Observable<VehicleSummary> {
    return this.apiHelper.get<VehicleSummary>('/vehicle/get-all-vehicles');
  }
  getVehicleStatistics(
    searchCriteria: SearchCriteria<VehicleFilter>
  ): Observable<VehicleDto[]> {
    return this.apiHelper.post<SearchCriteria<VehicleFilter>, VehicleDto[]>(
      '/vehicle/getVehicleStatistics',
      searchCriteria
    );
  }
  getVehiclesForGeofencing(code: string): Observable<VehicleDto[]> {
    return this.apiHelper.get<VehicleDto[]>(
      '/vehicle/get-vehicles-geofencing' + '/' + code
    );
  }

  getTreeVehicles(): any {
    return this.apiHelper.get<any>('/vehicle/get-vehicle-by-tree');
  }

  getVehiclesByGroupId(groupId: string): any {
    return this.apiHelper.get<any>(
      '/vehicle/get-vehicles-by-groupId/' + groupId
    );
  }
  exportAllVehicles(): any {
    return this.apiHelper.get<any>('/vehicle/export');
  }

  uploadExcel(file: FormData): any {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post<any>(
      'http://localhost/Raqeeb.Apis/api/vehicle/upload-excel',
      file,
      {
        headers,
      }
    );
  }
}
