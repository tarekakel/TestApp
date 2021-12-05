import { Language } from "angular-l10n";

export class UtilityHelper
{
  constructor() {
    
  }

  displayTextByLanguage(lang, englishName: string, arabicName: string) {
    if (lang == 'en') {

      return englishName;
    }
    else {

      return arabicName;
    }
  }
}
