import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LanguageService } from './language.service';
import { ContentService } from './content-services/content.service';
import { CityInfoComponent } from './city-info/city-info.component';
import { CityNewsComponent } from './city-news/city-news.component';
import { CityEventsComponent } from './city-events/city-events.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CityInfoComponent,
    CityNewsComponent,
    CityEventsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    LanguageService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
