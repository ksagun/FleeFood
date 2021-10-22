import { Component, OnInit } from '@angular/core';
import { RestaurantFacadeService } from '../../services/restaurant-facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css'],
})
export class RestaurantsPageComponent implements OnInit {
  location: string;
  lng: string;
  lat: string;
  restaurantLists$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(
    private restaurantFacadeService: RestaurantFacadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.location = this.route.snapshot.paramMap.get('location');
    this.lng = this.route.snapshot.paramMap.get('lng');
    this.lat = this.route.snapshot.paramMap.get('lat');

    this.restaurantLists$ = this.restaurantFacadeService.restaurantList$;
    this.isLoading$ = this.restaurantFacadeService.restaurantListLoading$;
    if (this.location != undefined)
      this.getRestaurantListbyLocation(
        this.removeSeperator(this.location),
        this.lng,
        this.lat
      );
  }

  getRestaurantListbyLocation(location: string, lng: string, lat: string) {
    this.restaurantFacadeService.getRestaurantList(
      this.removeSeperator(location),
      lng,
      lat
    );
  }

  removeSeperator(text: string) {
    var t = text.replace(/-/g, ' ');
    return t;
  }

  urlSegmenter(text: string) {
    if (text.includes(' ')) {
      var segmented = text.replace(/\s/g, '-');
      return segmented;
    }

    return text;
  }

  convertToMinutes(seconds) {
    return Math.floor(seconds / 60);
  }
}
