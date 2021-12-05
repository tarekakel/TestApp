import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { WebServiceFilter, LoggingFilter } from '../_models/WebServiceFilter';
import { PagedResult } from '../framework/view-models/grid/paged-result';
import { WebServiceSetup, Logging } from '../_models/WebServiceSetup';

@Injectable()
export class ManageWebSrvService extends BaseService {
  constructor() {
    super();
  }

  GetAllWebServicesSetup(searchCriteria: SearchCriteria<WebServiceFilter>) {
    return this.apiHelper.post<
      SearchCriteria<WebServiceFilter>,
      PagedResult<WebServiceSetup>
    >('/manage-web-services/search', searchCriteria);
  }

  GetAllLogs(searchCriteria: SearchCriteria<LoggingFilter>) {
    return this.apiHelper.post<
      SearchCriteria<LoggingFilter>,
      PagedResult<Logging>
    >('/manage-web-services/log/search', searchCriteria);
  }
}
