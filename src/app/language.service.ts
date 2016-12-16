import { Injectable } from '@angular/core';

import { Language } from './language';
import { LANGUAGES } from './languages';

@Injectable()
export class LanguageService {
  private _currentLanguage: Language = LANGUAGES[0];

  constructor() {  }

  getCurrentLanguage(){
    return this._currentLanguage;
  }
  setCurrentLanguage(currentLang: Language){
    this._currentLanguage = currentLang;
  }
  getLanguages(){
    return LANGUAGES;
  }
}
