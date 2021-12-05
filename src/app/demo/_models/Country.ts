import { City } from './City';

export class Country {
  idString: string | undefined;
  countryId: number | undefined;
  countryCode: number | undefined;
  arabicName: string | undefined;
  englishName: string | undefined;
  isoCode2: string | undefined;
  isoCode3: string | undefined;
  isActive: boolean | undefined;
  cities: City[] | undefined;
}
