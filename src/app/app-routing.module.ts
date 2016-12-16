import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CityInfoComponent } from './city-info/city-info.component';
import { CityNewsComponent } from './city-news/city-news.component';
import { CityEventsComponent } from './city-events/city-events.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'info', component: CityInfoComponent },
  { path: 'news', component: CityNewsComponent },
  { path: 'events', component: CityEventsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  
}