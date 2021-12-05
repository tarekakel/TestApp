import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { Application } from "../view-models/Application";
import { SearchCriteria } from "../../framework/view-models/grid/search-criteria";
import { ApplicationSearchFilter } from "../view-models/application-search-filter";
import { TicketSearchFilter } from "../view-models/ticket-search-filter";
import { PagedResult } from "../../framework/view-models/grid/paged-result";
import { SubApplication } from "../../superAdmin/view-models/SubApplication";
import { SubApplcation } from "../view-models/policy";
import { ApplicationsUser } from "../view-models/ApplicationsUser";
import { Urls } from "../common/Api-Urls";

@Injectable()
export class ApplicationService extends BaseService {

    constructor() {

        super();
    }

    getAllApplications() {

        return this.apiHelper.get<Application[]>(Urls.getAllApplicationsUrl);
    }
    getAllApplicationsUser() {

        return this.apiHelper.get<ApplicationsUser[]>(Urls.getAllApplicationsUserUrl);
    }

    getApplicationById(id: string) {

        return this.apiHelper.get<Application>(Urls.getApplicationByIdUrl + '/' + id);
    }

    searchApplications(searchCriteria: SearchCriteria<ApplicationSearchFilter>) {

        return this.apiHelper.post<SearchCriteria<ApplicationSearchFilter>, PagedResult<Application>>(Urls.applicationSearchUrl, searchCriteria);
    }

    addApplication(application: Application) {

        return this.apiHelper.post<Application, any>(Urls.applicationAddUrl, application);
    }

    updateApplication(application: Application) {
        application.id = null;
        return this.apiHelper.post<Application, any>(Urls.applicationUpdateUrl, application);
    }


    addSubApplication(subApplication: SubApplication) {

        return this.apiHelper.post<SubApplication, SubApplication>(Urls.subApplicationAddUrl, subApplication);
    }

    getAllSubApplications() {

        return this.apiHelper.get<SubApplication[]>(Urls.getAllSubApplicationsUrl);
    }

    getSubApplicationsByAppId(applicationId: string) {

        return this.apiHelper.get<SubApplication[]>(Urls.getSubApplicationsByAppIdUrl + '/' + applicationId);
    }

    searchSubApplications(searchCriteria: SearchCriteria<SubApplcation>) {

        return this.apiHelper.post<SearchCriteria<SubApplcation>, PagedResult<SubApplcation>>(Urls.subApplicationSearchUrl, searchCriteria);
    }





}
