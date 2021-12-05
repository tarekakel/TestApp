import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { VehicleClass } from '../_models/VehicleClass';

@Injectable()
export class VehicleClassService extends BaseService {
  constructor() {
    super();
  }
  postVehicleClass(vehicleClass: VehicleClass) {
    return this.apiHelper.post<VehicleClass, VehicleClass>(
      '/vehicleClass/add-vehicleClass',
      vehicleClass
    );
  }

  getVehicleClass() {
    return this.apiHelper.get<VehicleClass[]>(
      '/vehicleClass/vehicleClass-List'
    );
  }
  deleteVehicleClass(vehicleClass: VehicleClass) {
    return this.apiHelper.post<VehicleClass, VehicleClass>(
      '/vehicleClass/delete-vehicleClass',
      vehicleClass
    );
  }
}
