import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { PagedResult } from '../framework/view-models/grid/paged-result';
import { ManageRolesFilter } from '../_models/ManageRolesFilter';
import { MenuMaster } from './../_models/MenuMaster';
import { SubMenuMaster } from '../_models/SubMenuMaster';

@Injectable()
export class SubMenuMasterService extends BaseService {
  constructor() {
    super();
  }
  getByMenuCode(id: string) {
    return this.apiHelper.get<SubMenuMaster[]>(
      '/submenu/get-submenu-by-code' + '/' + id
    );
  }
  getAllMenu(searchCriteria: SearchCriteria<ManageRolesFilter>) {
    return this.apiHelper.get<SubMenuMaster[]>('/submenu/getall');
  }

  addMenu(submenu: SubMenuMaster) {
    return this.apiHelper.post<SubMenuMaster, SubMenuMaster>(
      '/submenu/add',
      submenu
    );
  }

  inactive(submenu: SubMenuMaster) {
    return this.apiHelper.post<SubMenuMaster, SubMenuMaster>(
      '/submenu/inactive',
      submenu
    );
  }

  delete(submenu: SubMenuMaster) {
    return this.apiHelper.post<SubMenuMaster, SubMenuMaster>(
      '/submenu/delete',
      submenu
    );
  }
}
