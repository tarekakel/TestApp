import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { ManageDevice } from '../_models/ManageDevice';

@Injectable()
export class ManageDeviceService extends BaseService {
  constructor() {
    super();
  }

  //   getAllDevices() {

  //     return this.apiHelper.get<ManageDevice[]>("/devices/getall");
  //   }

  addDevices(device: ManageDevice) {
    return this.apiHelper.post<ManageDevice, ManageDevice>(
      '/devices/add',
      device
    );
  }

  inactive(device: ManageDevice) {
    return this.apiHelper.post<ManageDevice, ManageDevice>(
      '/devices/inactive',
      device
    );
  }

  getAllDevices(entityId: string) {
    return this.apiHelper.get<ManageDevice[]>(
      '/devices/device-List' + '/' + entityId
    );
  }
}
