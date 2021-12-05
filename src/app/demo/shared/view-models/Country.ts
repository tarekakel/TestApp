import { City } from "./City";

export class Country {
  idString: string;
  countryId: number;
  countryCode: number;
  arabicName: string;
  englishName: string;
  isoCode2: string;
  isoCode3: string;
  isActive:boolean;
  cities:City[];
}

