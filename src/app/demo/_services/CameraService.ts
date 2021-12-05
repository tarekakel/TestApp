import { BaseService } from '../framework/core/base-service.service';
import { Injectable } from '@angular/core';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { PagedResult } from '../framework/view-models/grid/paged-result';
import { DriverFilter } from '../_models/DriverFilter';
import { LivePosition } from '../_models/LivePosition';
import { VehicleDto } from '../_models/VehicleDto';
import { CameraEntity } from '../_models/CameraEntity';
import { CameraFilter } from '../_models/CameraFilter';

@Injectable()
export class CameraService extends BaseService {
  constructor() {
    super();
  }

  getByCode(code: number) {
    return this.apiHelper.get<CameraEntity>(
      '/camera/get-camera-by-code' + '/' + code
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

  search(searchCriteria: SearchCriteria<CameraFilter>) {
    return this.apiHelper.post<
      SearchCriteria<CameraFilter>,
      PagedResult<CameraEntity>
    >('/driver/search', searchCriteria);
  }

  getAllCamera() {
    return this.apiHelper.get<CameraEntity[]>('/camera/get-all-camera');
  }

  getVehiclesEventsByClassificationId(vehicleFilter: DriverFilter) {
    return this.apiHelper.post<DriverFilter, VehicleDto[]>(
      '/vehicle/get-vehicles-events-by-classificationId',
      vehicleFilter
    );
  }

  addCamera(newCamera: CameraEntity) {
    return this.apiHelper.post<CameraEntity, CameraEntity>(
      '/camera/add-camera',
      newCamera
    );
  }
}
