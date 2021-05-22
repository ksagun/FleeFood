import { Injectable } from '@angular/core';
import * as LocationReducer from '../location.reducer';
import * as LocationActions from '../location.action';
import { LocationState } from '../../model/location-state';
import { select, Store } from '@ngrx/store';
import { LocationService } from 'src/app/services/location.service';

@Injectable({
  providedIn: 'root',
})
export class LocationFacadeService {
  constructor(private store: Store<LocationState>) {}

  //Reverse geocode current location
  isLoading$ = this.store.pipe(select(LocationReducer.locationLoading));
  isLoaded$ = this.store.pipe(select(LocationReducer.locationLoaded));
  getLocation$ = this.store.pipe(select(LocationReducer.location));

  //Get food stash
  stashLoading$ = this.store.pipe(select(LocationReducer.foodStashLoading));
  stashLoaded$ = this.store.pipe(select(LocationReducer.foodStashLoaded));
  getStash$ = this.store.pipe(select(LocationReducer.foodStash));

  //Submit entry
  entryLoading$ = this.store.pipe(select(LocationReducer.SubmitEntryLoading));
  entryLoaded$ = this.store.pipe(select(LocationReducer.submitEntryLoaded));
  submitEntry$ = this.store.pipe(select(LocationReducer.submitEntry));

  getCurrentLocation(lat: number, lng: number) {
    this.store.dispatch(
      new LocationActions.Location({ latitude: lat, longitude: lng })
    );
  }

  getNearestStash(location: string) {
    this.store.dispatch(new LocationActions.FoodStash(location));
  }

  submitFoodStashEntry(data: any) {
    this.store.dispatch(new LocationActions.SubmitEntry(data));
  }
}
