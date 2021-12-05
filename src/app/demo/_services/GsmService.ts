import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';

import { GsmMaster } from '../_models/GsmMaster';
import { SimCardMaster } from '../_models/SimCardMaster';

@Injectable()
export class GsmService extends BaseService {
  constructor() {
    super();
  }

  getAll() {
    return this.apiHelper.get<GsmMaster[]>('/gsm/getall');
  }

  add(gsm: GsmMaster) {
    return this.apiHelper.post<GsmMaster, GsmMaster>('/gsm/add', gsm);
  }

  inactive(gsm: GsmMaster) {
    return this.apiHelper.post<GsmMaster, GsmMaster>('/gsm/inactive', gsm);
  }
  addSim(sim: SimCardMaster) {
    return this.apiHelper.post<SimCardMaster, SimCardMaster>(
      '/simcard/add',
      sim
    );
  }
  getAllSim(gsmId: string, companyId: string) {
    return this.apiHelper.get<SimCardMaster[]>(
      '/simcard/getsim' + '/' + gsmId + '/' + companyId
    );
  }
  getSimCards(entityId: string) {
    return this.apiHelper.get<SimCardMaster[]>(
      '/simcard/getall' + '/' + entityId
    );
  }
}
