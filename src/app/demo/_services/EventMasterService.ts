import { BaseService } from '../framework/core/base-service.service';
import { Injectable } from '@angular/core';

import { SubEventMaster } from '../_models/SubEventMaster';

@Injectable()
export class EventMasterService extends BaseService {
  constructor() {
    super();
  }

  addSubEvent(newSubEvent: SubEventMaster) {
    return this.apiHelper.post<SubEventMaster, SubEventMaster>(
      '/eventMaster/add-sub-event-type',
      newSubEvent
    );
  }
  getEventtypes() {
    return this.apiHelper.get<any>('/event/get-event-types');
  }
}
