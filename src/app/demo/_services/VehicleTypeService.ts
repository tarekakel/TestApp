import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { VehicleType } from '../_models/VehicleType';

@Injectable()
export class VehicleTypeService extends BaseService {
  constructor() {
    super();
  }
  postVehicleType(vehicleType: VehicleType) {
    return this.apiHelper.post<VehicleType, VehicleType>(
      '/vehicleType/add-vehicleType',
      vehicleType
    );
  }

  getVehicleType() {
    return this.apiHelper.get<VehicleType[]>('/vehicleType/vehicleType-List');
  }
  deleteVehicleType(vehicleType: VehicleType) {
    return this.apiHelper.post<VehicleType, VehicleType>(
      '/vehicleType/delete-vehicleType',
      vehicleType
    );
  }
}
