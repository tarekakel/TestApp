import { PreferredLanguage, Gender } from "./enums";

export class CustomerProfile {
  id: string;
  idString: string;
  name: string;
  email: string;
  mobileNumber: string;
  eidaNumber: string;
  passportNumber: string;
  countryId: number = null;
  cityId?: number = null;
  countryCode: number;
  countryEnglishName: string;
  cityEnglishName: string;
  countryArabicName: string;
  cityArabicName: string;
  countryName: string;
  gender: Gender=1;
  nationalityId: number = null;
  nationalityCode: number;
  nationalityArabicName: string;
  nationalityEnglishName: string;
  preferredLanguage: PreferredLanguage=1;
}
