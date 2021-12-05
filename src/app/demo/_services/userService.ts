import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { ManageUsersFilter } from '../_models/ManageUsersFilter';
import { ManageUsers } from '../_models/ManageUsers';

@Injectable({ providedIn: 'root' })
export class UserService extends BaseService {
  constructor() {
    super();
  }

  getAllUsers(searchCriteria: SearchCriteria<ManageUsersFilter>) {
    return this.apiHelper.get<ManageUsers[]>('/user/getall');
  }

  getRolestypes() {
    return this.apiHelper.get<any>('/roles/get-roles-type');
  }

  addUser(user: ManageUsers) {
    return this.apiHelper.post<ManageUsers, any>('/user/add', user);
  }

  inactive(user: ManageUsers) {
    return this.apiHelper.post<ManageUsers, ManageUsers>(
      '/user/inactive',
      user
    );
  }

  delete(user: ManageUsers) {
    return this.apiHelper.post<ManageUsers, ManageUsers>('/user/delete', user);
  }
}
