import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { SearchCriteria } from "../../framework/view-models/grid/search-criteria";
import { PagedResult } from "../../framework/view-models/grid/paged-result";
import { User } from "../view-models/User";
import { UserSearchFilter } from "../view-models/user-search-filter";
import { Urls } from "../common/Api-Urls";
import { MenuMaster } from "../../admin/view-models/MenuMaster";
import { MenuMasterDto } from "../../admin/view-models/MenuMasterDto";

@Injectable()
export class UserService extends BaseService {

  constructor() {

    super();
  }

  searchUsers(searchCriteria: SearchCriteria<UserSearchFilter>) {

    return this.apiHelper.post<SearchCriteria<UserSearchFilter>, PagedResult<User>>(Urls.userSearchUrl, searchCriteria);
  }

  addUser(user: User) {

    return this.apiHelper.post<User, any>(Urls.userAddUrl, user);
  }

  updateUser(user: User) {
    user.id = null;
    return this.apiHelper.post<User, any>(Urls.userUpdateUrl, user);
  }

  getAllUser() {

    return this.apiHelper.get<User[]>(Urls.getAllUsersUrl);
  }

  getUserById(id: string) {

    return this.apiHelper.get<User>(Urls.getUserByIdUrl + '/' + id);
  }

  
  changePassword(user:User) {
    return this.apiHelper.post<User, any>(Urls.userChangePasswordUrl, user);
    //return this.apiHelper.get<any>(Urls.userChangePasswordUrl + '/' + oldPassword + '/' + newPassword + '/' + userName);
  }

  getMenuByUserRole(user:User)
  {
    
    return this.apiHelper.post<User,MenuMasterDto[]>(Urls.getMenuByRoleUrl, user);
    
  }
   
}
