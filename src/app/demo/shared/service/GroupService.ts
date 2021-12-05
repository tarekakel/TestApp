import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { SearchCriteria } from "../../framework/view-models/grid/search-criteria";
import { PagedResult } from "../../framework/view-models/grid/paged-result";
import { GroupSearchFilter } from "../view-models/group-search-filter";
import { Group } from "../view-models/Group";
import { Urls } from "../common/Api-Urls";

@Injectable()
export class GroupService extends BaseService {

  constructor() {

    super();
  }

  searchGroups(searchCriteria: SearchCriteria<GroupSearchFilter>) {

    return this.apiHelper.post<SearchCriteria<GroupSearchFilter>, PagedResult<Group>>(Urls.groupSearchUrl, searchCriteria);
  }

  addGroup(group: Group) {

    return this.apiHelper.post<Group, any>(Urls.groupAddUrl, group);
  }

  updateGroup(group: Group) {
    group.id = null;
    return this.apiHelper.post<Group, any>(Urls.groupUpdateUrl, group);
  }

  getGroupById(id: string) {

    return this.apiHelper.get<Group>(Urls.getGroupByIdUrl + '/' + id);
  }
}
