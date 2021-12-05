import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { GroupMaster } from '../_models/GroupMaster';

@Injectable()
export class GroupMasterService extends BaseService {
  constructor() {
    super();
  }

  getAll() {
    return this.apiHelper.get<GroupMaster[]>('/group/group-List');
  }

  add(grp: GroupMaster) {
    return this.apiHelper.post<GroupMaster, GroupMaster>('/gsm/add', grp);
  }

  inactive(grp: GroupMaster) {
    return this.apiHelper.post<GroupMaster, GroupMaster>('/gsm/inactive', grp);
  }
}
