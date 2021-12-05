import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { VehicleModel } from '../_models/VehicleModel';

@Injectable()
export class VehicleModelService extends BaseService {
  constructor() {
    super();
  }
  postVehicleModel(vehicleModel: VehicleModel) {
    return this.apiHelper.post<VehicleModel, VehicleModel>(
      '/vehicleModel/add-vehicleModel',
      vehicleModel
    );
  }
  getVehicleModelByCode(brandId: string) {
    return this.apiHelper.get<VehicleModel[]>(
      '/vehicleModel/get-model-by-brand' + '/' + brandId
    );
  }

  getVehicleModel() {
    return this.apiHelper.get<VehicleModel[]>(
      '/vehicleModel/vehicleModel-List'
    );
  }
  deleteVehicleModel(vehicleModel: VehicleModel) {
    return this.apiHelper.post<VehicleModel, VehicleModel>(
      '/vehicleModel/delete-vehicleModel',
      vehicleModel
    );
  }
}
