import { Component, OnInit, HostBinding,
         trigger, transition, animate,
         style, state } from '@angular/core';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css']
/*  animations: [
    trigger('routeAnimation', [
      state('*',
        style({opacity: 1})
      ),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({
          opacity: 0
        }))
      ])
    ])
  ] */
})
export class CityInfoComponent implements OnInit {
/*  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  } */
  constructor() { }

  ngOnInit() {
    
  }

}
