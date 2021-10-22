import { Injectable } from '@angular/core';
import * as RestaurantReducer from '../state/restaurant.reducer';
import * as RestaurantActions from '../state/restaurant.actions';
import { RestaurantState } from '../model/restaurant-state';
import { select, Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class RestaurantFacadeService {
  constructor(private store: Store<RestaurantState>) {}

  //Get food stash
  restaurantListLoading$ = this.store.pipe(
    select(RestaurantReducer.restaurantLoading)
  );
  restaurantListLoaded$ = this.store.pipe(
    select(RestaurantReducer.restaurantLoaded)
  );
  restaurantList$ = this.store.pipe(select(RestaurantReducer.restaurantList));

  restaurant$ = this.store.pipe(select(RestaurantReducer.restaurant));

  getRestaurantList(location: string, lng: string, lat: string) {
    this.store.dispatch(
      new RestaurantActions.GetRestaurantList({
        location: location,
        lng: lng,
        lat: lat,
      })
    );
  }

  getRestaurant(storename: string, id: string) {
    this.store.dispatch(
      new RestaurantActions.GetRestaurant({
        name: storename,
        id: id,
      })
    );
  }
}
