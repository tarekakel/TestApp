import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { SearchCriteria } from "../../framework/view-models/grid/search-criteria";

import { Urls } from "../common/Api-Urls";
import { Template } from "../view-models/Template";
import { TemplateSearchFilter } from "../view-models/template-search-filter";
import { PagedResult } from "../../framework/view-models/grid/paged-result";

@Injectable()
export class TemplateService extends BaseService {

  constructor() {

    super();
  }

  addTemplate(template: Template) {

    return this.apiHelper.post<Template, any>(Urls.templateAddUrl, template);
  }

  updateTemplate(template: Template) {
    template.id = null;
    return this.apiHelper.post<Template, any>(Urls.templateUpdateUrl, template);
  }

  getTemplateById(id: string) {

    return this.apiHelper.get<Template>(Urls.getTemplateByIdUrl + '/' + id);
  }

    searchTemplates(searchCriteria: SearchCriteria<TemplateSearchFilter>) {

      return this.apiHelper.post<SearchCriteria<TemplateSearchFilter>, PagedResult<Template>>(Urls.templateSearchUrl, searchCriteria);
  }

  getByApplicationId(applicationId) {
    return this.apiHelper.get<Template[]>(Urls.getByApplicationIdUrl + '/' + applicationId);
  }
}
