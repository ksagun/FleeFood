import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { LocationService } from '../../services/location.service';
import * as LocationActions from './location.action';

@Injectable()
export class LocationEffect {
  constructor(
    private action$: Actions,
    private locationService: LocationService
  ) {}

  @Effect()
  location$: Observable<Action> = this.action$.pipe(
    ofType<LocationActions.Location>(
      LocationActions.LocationActionTypes.LOCATION
    ),
    mergeMap((params) => {
      return this.locationService
        .getCurrentLocation(params.payload.latitude, params.payload.longitude)
        .pipe(
          map((location: any) => new LocationActions.LocationSuccess(location)),
          catchError((err) => of(new LocationActions.LocationFail(err)))
        );
    })
  );

  @Effect()
  foodStash$: Observable<Action> = this.action$.pipe(
    ofType<LocationActions.FoodStash>(
      LocationActions.LocationActionTypes.FOOD_STASH
    ),
    mergeMap((params) => {
      return this.locationService.getStashNearestLocation(params.location).pipe(
        map((stash: any) => new LocationActions.FoodStashSuccess(stash)),
        catchError((err) => of(new LocationActions.FoodStashFail(err)))
      );
    })
  );

  @Effect()
  submitEntry$: Observable<Action> = this.action$.pipe(
    ofType<LocationActions.SubmitEntry>(
      LocationActions.LocationActionTypes.SUBMIT_ENTRY
    ),
    mergeMap((params) => {
      return this.locationService.submitFoodStashEntry(params.payload).pipe(
        map((stash: any) => new LocationActions.SubmitEntrySuccess(stash)),
        catchError((err) => of(new LocationActions.SubmitEntryFail(err)))
      );
    })
  );
}
