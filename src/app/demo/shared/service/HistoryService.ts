import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { History } from "../view-models/history";
import { HistorySearchFilter } from "../view-models/history-search-filter";
import { SearchCriteria } from "../../framework/view-models/grid/search-criteria";
import { PagedResult } from "../../framework/view-models/grid/paged-result";
import { Urls } from "../common/Api-Urls";

@Injectable()
export class HistoryService extends BaseService {

  constructor() {
    super();
  }

  addHistory(history: History) {

    return this.apiHelper.post<History, any>(Urls.historyAddUrl, history);
  }

  addHistoryClient(history: History) {

      return this.apiHelper.post<History, History>(Urls.historyAddClientUrl, history);
  }


  getHistories(searchCriteria: SearchCriteria<HistorySearchFilter>) {
    return this.apiHelper.post<SearchCriteria<HistorySearchFilter>, PagedResult<History>>(Urls.HistorySearchUrl, searchCriteria);
  }
  getApplicationTicketHistories(searchCriteria: SearchCriteria<HistorySearchFilter>) {
      return this.apiHelper.post<SearchCriteria<HistorySearchFilter>, PagedResult<History>>(Urls.ApplicationHistorySearchUrl, searchCriteria);
  }

  getApplicationTrackingHistories(ticketId: string) {

      return this.apiHelper.get<History[]>(Urls.getApplicationTrackingHistoriesUrl + '/' + ticketId);

  }
}

