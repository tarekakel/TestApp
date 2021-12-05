export class UtilityHelper {
  constructor() {}

  displayTextByLanguage(lang: string, englishName: string, arabicName: string) {
    if (lang == 'en') {
      return englishName;
    } else {
      return arabicName;
    }
  }
}
