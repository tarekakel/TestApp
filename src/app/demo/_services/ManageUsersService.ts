import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { ManageUsers } from './../_models/ManageUsers';
import { Roles } from '../_models/Roles';
import { UserModel } from '../_models/UserModel';
import { Observable } from 'rxjs';

@Injectable()
export class ManageUsersService extends BaseService {
  constructor() {
    super();
  }

  getAllUsers(): Observable<UserModel> {
    return this.apiHelper.get<UserModel>('/user/getall');
  }

  getRolestypes(): Observable<Roles[]> {
    return this.apiHelper.get<Roles[]>('/roles/get-roles-type');
  }

  addUser(user: ManageUsers): Observable<any> {
    return this.apiHelper.post<ManageUsers, any>('/user/add', user);
  }

  inactive(user: ManageUsers): Observable<ManageUsers> {
    return this.apiHelper.post<ManageUsers, ManageUsers>(
      '/user/inactive',
      user
    );
  }

  delete(user: ManageUsers): Observable<ManageUsers> {
    return this.apiHelper.post<ManageUsers, ManageUsers>('/user/delete', user);
  }
}
