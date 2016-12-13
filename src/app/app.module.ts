import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { CityNewsComponent } from './city-news/city-news.component';
import { CityEventsComponent } from './city-events/city-events.component';

const appRoutes: Routes = [
  { path: 'info', component: CityInfoComponent },
  { path: 'news', component: CityNewsComponent },
  { path: 'events', component: CityEventsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CityInfoComponent,
    CityNewsComponent,
    CityEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
