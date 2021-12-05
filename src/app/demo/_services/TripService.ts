import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { SearchCriteria } from '../framework/view-models/grid/search-criteria';
import { PagedResult } from '../framework/view-models/grid/paged-result';
import { TripFilter } from '../_models/TripFilter';
import { TripDto } from '../_models/TripDto';

@Injectable()
export class TripService extends BaseService {
  constructor() {
    super();
  }

  getTotalVehiclesByTripDateDashboard(
    searchCriteria: SearchCriteria<TripFilter>
  ) {
    return this.apiHelper.post<SearchCriteria<TripFilter>, any>(
      '/trip/get-total-vehicles-by-trip-date',
      searchCriteria
    );
  }

  GetEventsWithVehiclesDashboard(searchCriteria: SearchCriteria<TripFilter>) {
    return this.apiHelper.post<
      SearchCriteria<TripFilter>,
      PagedResult<TripDto>
    >('/trip/get-events-vehicles-by-trip-date', searchCriteria);
  }

  search(searchCriteria: SearchCriteria<TripFilter>) {
    return this.apiHelper.post<
      SearchCriteria<TripFilter>,
      PagedResult<TripDto>
    >('/trip/search', searchCriteria);
  }

  getTripDetailsByCode(code: number, isVehicleDisplayed: boolean) {
    return this.apiHelper.get<TripDto>(
      '/trip/get-trip-details-by-code' + '/' + code + '/' + isVehicleDisplayed
    );
  }
  getTripCoOrdinates(code: number) {
    return this.apiHelper.get<any>(
      '/trip/get-trip-coordinates-by-code' + '/' + code
    );
  }
}
