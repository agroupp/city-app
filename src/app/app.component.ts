import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language.service';
import { ContentService } from './content-services/content.service';
import { Language } from './language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  languages: Array<Language>;
  currentLanguage: Language;
  cityMenu: Array<any>;


  constructor(
    private _languageService: LanguageService,
    private _contentService: ContentService
  ){
    
  }

  ngOnInit(){
    this.languages = this._languageService.getLanguages();
    this.setCurrentLanguage();
  }

  selectCurrentLanguage(lang){
    this._languageService.setCurrentLanguage(lang);
    this.setCurrentLanguage();
  }
  setCurrentLanguage(){
    this.currentLanguage = this._languageService.getCurrentLanguage();
    this.cityMenu = this._contentService.getMainMenu('city', this.currentLanguage);
  }
  getButtonLabel(btnName){
    return this._contentService.getComponentLabel(btnName, this.currentLanguage);
  }
}
