import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { EventFilter } from '../_models/EventFilter';
import { PagedResult } from '../framework/view-models/grid/paged-result';
import { EventDto } from '../_models/EventDto';
import { EventReclassification } from '../_models/EventReclassification';
import { BehaviorSubject, Observable } from 'rxjs';
import { ViolationSummary } from '../_models/ViolationSummary';

@Injectable()
export class EventService extends BaseService {
  searchCriter: SearchCriteria<EventFilter>;

  constructor() {
    super();
    this.searchCriter = new SearchCriteria<EventFilter>();
    this.searchCriter.filters = new EventFilter();
  }

  GetEventsDashboard(searchCriteria: SearchCriteria<EventFilter>) {
    return this.apiHelper.post<
      SearchCriteria<EventFilter>,
      PagedResult<EventDto>
    >('/event/get-events-dashboard', searchCriteria);
  }

  // not used until now
  searchEvents(searchCriteria: SearchCriteria<EventFilter>) {
    return this.apiHelper.post<
      SearchCriteria<EventFilter>,
      PagedResult<EventDto>
    >('/event/search', searchCriteria);
  }

  searchEventsForPage(searchCriteria: any): any {
    return this.apiHelper.post<SearchCriteria<EventFilter>, ViolationSummary>(
      '/event/searchEventPage',
      searchCriteria
    );
  }

  getEventDetailsByVehicle(searchCriteria: SearchCriteria<EventFilter>) {
    return this.apiHelper.post<SearchCriteria<EventFilter>, EventDto[]>(
      '/event/get-event-details-by-vehicle',
      searchCriteria
    );
  }
  getEventDetailsByCode(code: string) {
    return this.apiHelper.get<EventDto>(
      '/event/get-event-details-by-code' + '/' + code
    );
  }
  getEventtypesByCode(eventTypeCode: number) {
    return this.apiHelper.get<any>(
      '/event/get-event-types-by-code' + '/' + eventTypeCode
    );
  }
  getSubEventtypesByCode(eventTypeCode: number) {
    return this.apiHelper.get<any>(
      '/event/get-sub-event-types-by-code' + '/' + eventTypeCode
    );
  }
  getEventtypes() {
    return this.apiHelper.get<any>('/event/get-event-types');
  }
  getDebugCodestypes() {
    return this.apiHelper.get<any>('/event/get-debug-types');
  }
  getGroupMaster() {
    return this.apiHelper.get<any>('/group/group-List');
  }
  getLocation(lng: number, lat: number) {
    return this.apiHelper.getGeneral<any>(
      'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' +
        lat +
        '&lon=' +
        lng
    );
  }

  getEventSetups() {
    return this.apiHelper.get<any>('/setup/get-all');
  }

  updateEventSetup(setup: any) {
    return this.apiHelper.post<any, any>('/setup/update', setup);
  }

  postReclassification(eventReclassification: EventReclassification) {
    return this.apiHelper.post<EventReclassification, EventReclassification>(
      '/event/post-Classification-Reclassification',
      eventReclassification
    );
  }
  postRejectEvent(
    eventReclassification: EventReclassification
  ): Observable<EventReclassification> {
    return this.apiHelper.post<EventReclassification, EventReclassification>(
      '/event/post-Rejection',
      eventReclassification
    );
  }
  postAcceptEvent(
    eventReclassification: EventReclassification
  ): Observable<EventReclassification> {
    return this.apiHelper.post<EventReclassification, EventReclassification>(
      '/event/post-Accept',
      eventReclassification
    );
  }
  getAllEvvents(): Observable<any> {
    return this.apiHelper.get<any>('/event/get-events-dashboardMonitoring');
  }

  downloadViolation(evidenceID: string): Observable<any> {
    return this.apiHelper.getGeneral<any>(
      '/event/download-violation' + '/' + evidenceID
    );
  }
  export(filter: any): Observable<any> {
    return this.apiHelper.post<any, any>('/event/export', filter);
  }
}
