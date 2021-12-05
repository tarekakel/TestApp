import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { ManufacturerMaster } from '../_models/ManufacturerMaster';
import { DeviceModel } from './../_models/DeviceModel';

@Injectable()
export class ManufacturerService extends BaseService {
  constructor() {
    super();
  }

  getAllManufacturer() {
    return this.apiHelper.get<ManufacturerMaster[]>(
      '/deviceManufacturer/getAll'
    );
  }

  addManufacturer(manufacturer: ManufacturerMaster) {
    return this.apiHelper.post<ManufacturerMaster, ManufacturerMaster>(
      '/deviceManufacturer/add',
      manufacturer
    );
  }

  inactive(manufacturer: ManufacturerMaster) {
    return this.apiHelper.post<ManufacturerMaster, ManufacturerMaster>(
      '/deviceManufacturer/inactive',
      manufacturer
    );
  }
  addModel(model: DeviceModel) {
    return this.apiHelper.post<DeviceModel, DeviceModel>(
      '/deviceModel/add',
      model
    );
  }
  getAllModel(manufactureId: string) {
    return this.apiHelper.get<DeviceModel[]>(
      '/deviceModel/getmodelbymanufacturer' + '/' + manufactureId
    );
  }
}
