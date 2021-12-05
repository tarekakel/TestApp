import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { IoElementsMaster } from '../_models/IoElementsMaster';

@Injectable()
export class IoElementsMasterService extends BaseService {
  constructor() {
    super();
  }

  getAllIoElements() {
    return this.apiHelper.get<IoElementsMaster[]>(
      '/ioElements/ioElements-List'
    );
  }

  addIoElements(elements: IoElementsMaster) {
    return this.apiHelper.post<IoElementsMaster, IoElementsMaster>(
      '/ioElements/add',
      elements
    );
  }

  inactive(elements: IoElementsMaster) {
    return this.apiHelper.post<IoElementsMaster, IoElementsMaster>(
      '/ioElements/inactive',
      elements
    );
  }
}
