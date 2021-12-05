import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { ManageRolesFilter } from '../_models/ManageRolesFilter';
import { ManageRoles } from '../_models/ManageRoles';

@Injectable()
export class ManageRolesService extends BaseService {
  constructor() {
    super();
  }

  getAllRoles(searchCriteria: SearchCriteria<ManageRolesFilter>) {
    return this.apiHelper.get<ManageRoles[]>('/roles/getall');
  }

  addRole(role: ManageRoles) {
    return this.apiHelper.post<ManageRoles, ManageRoles>('/roles/add', role);
  }

  inactive(role: ManageRoles) {
    return this.apiHelper.post<ManageRoles, ManageRoles>(
      '/roles/inactive',
      role
    );
  }

  delete(role: ManageRoles) {
    return this.apiHelper.post<ManageRoles, ManageRoles>('/roles/delete', role);
  }
}
