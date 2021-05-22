import { Action } from '@ngrx/store';
import { LocationState } from '../model/location-state';

export enum LocationActionTypes {
  LOCATION = '[Location] Location',
  LOCATION_SUCCESS = '[Location] Location Success',
  LOCATION_FAIL = '[Location] Location Fail',
  FOOD_STASH = '[Location] Food Stash',
  FOOD_STASH_SUCCESS = '[Location] Food Stash Success',
  FOOD_STASH_FAIL = '[Location] Food Stash Fail',
  SUBMIT_ENTRY = '[Location] Submit Entry',
  SUBMIT_ENTRY_SUCCESS = '[Location] Submit Entry Success',
  SUBMIT_ENTRY_FAIL = '[Location] Submit Entry Fail',
}

export class Location implements Action {
  readonly type = LocationActionTypes.LOCATION;
  constructor(public payload: any) {}
}

export class LocationSuccess implements Action {
  readonly type = LocationActionTypes.LOCATION_SUCCESS;
  constructor(public payload: any) {}
}

export class LocationFail implements Action {
  readonly type = LocationActionTypes.LOCATION_FAIL;
  constructor(public payload: any) {}
}

export class FoodStash implements Action {
  readonly type = LocationActionTypes.FOOD_STASH;
  constructor(public location: string) {}
}

export class FoodStashSuccess implements Action {
  readonly type = LocationActionTypes.FOOD_STASH_SUCCESS;
  constructor(public location: string) {}
}

export class FoodStashFail implements Action {
  readonly type = LocationActionTypes.FOOD_STASH_FAIL;
  constructor(public location: string) {}
}

export class SubmitEntry implements Action {
  readonly type = LocationActionTypes.SUBMIT_ENTRY;
  constructor(public payload: any) {}
}

export class SubmitEntrySuccess implements Action {
  readonly type = LocationActionTypes.SUBMIT_ENTRY_SUCCESS;
  constructor(public payload: any) {}
}

export class SubmitEntryFail implements Action {
  readonly type = LocationActionTypes.SUBMIT_ENTRY_FAIL;
  constructor(public payload: any) {}
}

export type LocationAction =
  | Location
  | LocationSuccess
  | LocationFail
  | FoodStash
  | FoodStashSuccess
  | FoodStashFail
  | SubmitEntry
  | SubmitEntrySuccess
  | SubmitEntryFail;
