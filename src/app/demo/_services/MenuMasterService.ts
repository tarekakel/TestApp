import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { ManageRolesFilter } from '../_models/ManageRolesFilter';
import { MenuMaster } from './../_models/MenuMaster';

@Injectable()
export class MenuMasterService extends BaseService {
  constructor() {
    super();
  }

  getAllMenu(searchCriteria: SearchCriteria<ManageRolesFilter>) {
    return this.apiHelper.get<MenuMaster[]>('/menus/getall');
  }

  addMenu(menu: MenuMaster) {
    return this.apiHelper.post<MenuMaster, MenuMaster>('/menus/add', menu);
  }

  inactive(menu: MenuMaster) {
    return this.apiHelper.post<MenuMaster, MenuMaster>('/menus/inactive', menu);
  }

  delete(menu: MenuMaster) {
    return this.apiHelper.post<MenuMaster, MenuMaster>('/menus/delete', menu);
  }
}
