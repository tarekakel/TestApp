import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { FuelType } from '../_models/FuelType';

@Injectable()
export class FuelTypeService extends BaseService {
  constructor() {
    super();
  }
  postFuelType(fuelType: FuelType) {
    return this.apiHelper.post<FuelType, FuelType>(
      '/fuelType/add-fuelType',
      fuelType
    );
  }

  getFuelType() {
    return this.apiHelper.get<FuelType[]>('/fuelType/fuelType-List');
  }
  deleteFuelType(fuelType: FuelType) {
    return this.apiHelper.post<FuelType, FuelType>(
      '/fuelType/delete-fuelType',
      fuelType
    );
  }
}
