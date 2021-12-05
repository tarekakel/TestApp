import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { VehicleBrandMaster } from '../_models/VehicleBrandMaster';

@Injectable()
export class VehicleBrandMasterService extends BaseService {
  constructor() {
    super();
  }
  post(vehicleBrandMaster: VehicleBrandMaster) {
    return this.apiHelper.post<VehicleBrandMaster, VehicleBrandMaster>(
      '/vehicleBrand/add',
      vehicleBrandMaster
    );
  }

  getALL() {
    return this.apiHelper.get<VehicleBrandMaster[]>('/vehicleBrand/getall');
  }
  delete(vehicleBrandMaster: VehicleBrandMaster) {
    return this.apiHelper.post<VehicleBrandMaster, VehicleBrandMaster>(
      '/vehicleClass/delete-vehicleClass',
      vehicleBrandMaster
    );
  }
}
