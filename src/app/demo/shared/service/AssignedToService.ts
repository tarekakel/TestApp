import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { AssignedTo } from "../view-models/AssignedTo";
import { Urls } from "../common/Api-Urls";

@Injectable()
export class AssignedToService extends BaseService {

    constructor() {

        super();
    }

    getAssignedToUsersAndGroups(applicationId: string) {
        return this.apiHelper.get<AssignedTo[]>(Urls.getAssignedToUsersAndGroupsUrl + "/" + applicationId);
    }

    getAssignedToUsersAndGroupsClient(applicationId : string) {
        return this.apiHelper.get<AssignedTo[]>(Urls.getUsersGroupsApptrackingUrl + "/" + applicationId);
    }
}

