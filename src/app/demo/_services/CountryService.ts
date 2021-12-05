import { Injectable } from '@angular/core';
import { BaseService } from '../framework/core/base-service.service';
import { City } from '../_models/City';
import { Country } from '../_models/Country';

@Injectable()
export class CountryService extends BaseService {
  constructor() {
    super();
  }

  getAllCountries() {
    return this.apiHelper.get<Country[]>('/country/country-List');
  }

  addCountry(country: Country) {
    return this.apiHelper.post<Country, Country>('/country/add', country);
  }

  inactive(country: Country) {
    return this.apiHelper.post<Country, Country>('/roles/inactive', country);
  }
  addCity(city: City) {
    return this.apiHelper.post<City, City>('/country/addCity', city);
  }
  getAllCities(country: Country) {
    return this.apiHelper.post<Country, City[]>('/country/cityList', country);
  }
}
