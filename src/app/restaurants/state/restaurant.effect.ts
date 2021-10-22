import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { RestaurantService } from '../services/restaurant.service';
import * as RestaurantActions from './restaurant.actions';

@Injectable()
export class RestaurantEffect {
  constructor(
    private action$: Actions,
    private restaurantService: RestaurantService
  ) {}

  @Effect()
  getRestaurantList$: Observable<Action> = this.action$.pipe(
    ofType<RestaurantActions.GetRestaurantList>(
      RestaurantActions.RestaurantActionTypes.GET_RESTAURANT_LIST
    ),
    mergeMap((params) => {
      return this.restaurantService.getRestaurantList(params.payload).pipe(
        map(
          (data: any) => new RestaurantActions.GetRestaurantListSuccess(data)
        ),
        catchError((err) =>
          of(new RestaurantActions.GetRestaurantListFail(err))
        )
      );
    })
  );

  @Effect()
  getRestaurant$: Observable<Action> = this.action$.pipe(
    ofType<RestaurantActions.GetRestaurantList>(
      RestaurantActions.RestaurantActionTypes.GET_RESTAURANT
    ),
    mergeMap((params) => {
      return this.restaurantService.getRestaurant(params.payload).pipe(
        map((data: any) => new RestaurantActions.GetRestaurantSuccess(data)),
        catchError((err) => of(new RestaurantActions.GetRestaurantFail(err)))
      );
    })
  );
}
