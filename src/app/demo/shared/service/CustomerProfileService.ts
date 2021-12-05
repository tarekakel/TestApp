import { BaseService } from "../../framework/core/base-service.service";
import { Injectable } from '@angular/core';
import { SearchCriteria } from "../../framework/view-models/grid/search-criteria";
import { PagedResult } from "../../framework/view-models/grid/paged-result";
import { CustomerProfile } from "../view-models/CustomerProfile";
import { CustomerProfileSearchFilter } from "../view-models/customer-profile-search-filter";
import { Country } from "../view-models/Country";
import { City } from "../view-models/City";
import { Urls } from "../common/Api-Urls";

@Injectable()
export class CustomerProfileService extends BaseService {

  constructor() {

    super();
  }

  addCustomerProfile(customerProfile: CustomerProfile) {

    return this.apiHelper.post<CustomerProfile, any>(Urls.customerProfileAddUrl, customerProfile);
  }

  updateCustomerProfile(customerProfile: CustomerProfile) {
    customerProfile.id = null;
    return this.apiHelper.post<CustomerProfile, any>(Urls.customerProfileUpdateUrl, customerProfile);
  }

  getCustomerProfileById(id: string) {

    return this.apiHelper.get<CustomerProfile>(Urls.getCustomerProfileByIdUrl + '/' + id);
  }

  searchCustomerProfiles(searchCriteria: SearchCriteria<CustomerProfileSearchFilter>) {

    return this.apiHelper.post<SearchCriteria<CustomerProfileSearchFilter>, PagedResult<CustomerProfile>>(Urls.customerProfileSearchUrl, searchCriteria);
  }

  searchCustomerProfilesEmail(searchCriteria: SearchCriteria<CustomerProfileSearchFilter>) {

    return this.apiHelper.post<SearchCriteria<CustomerProfileSearchFilter>, PagedResult<CustomerProfile>>(Urls.customerProfileEmailSearchUrl, searchCriteria);
  }

  getAllCountries() {

    return this.apiHelper.get<Country[]>(Urls.getAllCountriesUrl);
  }

  getAllCities() {

    return this.apiHelper.get<City[]>(Urls.getAllCitiesUrl);
  }

  getCustomerProfileByEmail(customerProfileSearchFilter: CustomerProfileSearchFilter) {

    return this.apiHelper.post<CustomerProfileSearchFilter, CustomerProfile>(Urls.getCustomerProfileByEmailUrl, customerProfileSearchFilter);
  }

}
