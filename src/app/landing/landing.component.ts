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
  locationLoading!: Observable<boolean>;
  foodStash!: Observable<any>;
  stashLoading!: Observable<boolean>;

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
      this.location$.getCurrentLocation(
        position.coords.latitude,
        position.coords.longitude
      );

      this.location$.getLocation$.subscribe((s) => {
        if (s) {
          this.myLocation = s.display_name;
          if (s.address.city_district) {
            this.getFoodStash(s.address.city_district);
          } else {
            //this.getFoodStash(s.address.city);
            this.getFoodStash('Salawag');
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
}
