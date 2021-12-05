import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { DriverTagMaster } from '../_models/DriverTagMaster';

@Injectable()
export class DriverTagMasterService extends BaseService {
  constructor() {
    super();
  }
  postTagMaster(driverTagMaster: DriverTagMaster) {
    return this.apiHelper.post<DriverTagMaster, DriverTagMaster>(
      '/driver-tag/add-driverTag',
      driverTagMaster
    );
  }

  getTagMaster(entityId: string) {
    return this.apiHelper.get<DriverTagMaster[]>(
      '/driver-tag/get-all-tags-entityWise' + '/' + entityId
    );
  }
  deleteTagMaster(driverTagMaster: DriverTagMaster) {
    return this.apiHelper.post<DriverTagMaster, DriverTagMaster>(
      '/driver-tag/delete-driverTag',
      driverTagMaster
    );
  }
}
