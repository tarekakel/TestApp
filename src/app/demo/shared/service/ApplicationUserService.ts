import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { Application } from "../view-models/Application";
import { SearchCriteria } from "../../framework/view-models/grid/search-criteria";
import { ApplicationsUser } from "../view-models/ApplicationsUser";
import { Urls } from "../common/Api-Urls";

@Injectable()
export class ApplicationUserService extends BaseService {

    constructor() {

        super();
    }

  addApplicationsUser(applicationsUser: ApplicationsUser[]) {

        return this.apiHelper.post<ApplicationsUser[], any>(Urls.applicationsUserAddUrl, applicationsUser);
  }

  getAllApplicationsUserByUserId(userId: string) {

    return this.apiHelper.get<ApplicationsUser[]>(Urls.getAllApplicationByUserIdUrl + '/' + userId);
  }

}
