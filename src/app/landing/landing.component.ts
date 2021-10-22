import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { take } from 'rxjs/operators';
import { LocationFacadeService } from '../state/location/services/location-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  merchants: any;
  geocode!: string;
  myLocation: any;
  searchLocation: any;
  locationLoading!: Observable<boolean>;
  foodStash!: Observable<any>;
  stashLoading!: Observable<boolean>;
  position$: any;

  constructor(
    private readonly geolocation$: GeolocationService,
    private location$: LocationFacadeService
  ) {}

  ngOnInit(): void {
    this.merchants = [
      'FruitCheck',
      'Ramen On the Go',
      'KAPE',
      'Jollibee',
      'McDo',
      'BurgerKing',
    ];

    this.geocode = '';
    this.locationLoading = this.location$.isLoading$;
    this.getCurrentLocation();
    this.stashLoading = this.location$.stashLoading$;
  }

  getCurrentLocation() {
    this.geolocation$.pipe(take(1)).subscribe((position) => {
      this.position$ = position;

      this.location$.getCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      );

      this.location$.getLocation$.subscribe((s) => {
        if (s) {
          this.myLocation = s.display_name;

          if (s.address.suburb && s.address.city && s.address.state)
            this.searchLocation =
              this.urlSegmenter(s.address.suburb) +
              '-' +
              s.address.city +
              '-' +
              s.address.state;
          else if (s.address.city_district)
            this.searchLocation =
              s.address.city_district +
              '-' +
              s.address.city +
              '-' +
              s.address.state;
          else this.searchLocation = s.address.city + '-' + s.address.state;

          if (s.address.city_district) {
            this.getFoodStash(s.address.city_district);
          } else {
            this.getFoodStash(s.address.city);
            //this.getFoodStash('Salawag');
          }
        }
      });
    });
  }

  getFoodStash(location: string) {
    this.location$.getNearestStash(location);

    this.location$.getStash$.subscribe((s) => {
      if (s) {
        this.foodStash = s;
      }
    });
  }

  urlSegmenter(text: string) {
    if (text.includes(' ')) {
      var segmented = text.replace(/\s/g, '-');
      return segmented;
    }

    return text;
  }
}
