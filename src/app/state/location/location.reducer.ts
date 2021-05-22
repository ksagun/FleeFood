import {
  LocationAction,
  LocationActionTypes,
} from '../location/location.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LocationState } from '../model/location-state';

const initialState: LocationState = {
  location: null,
  foodStash: null,
  entry: null,
  loading: false,
  loaded: false,
  error: '',
};

export function LocationReducer(
  state: LocationState = initialState,
  action: LocationAction
): LocationState {
  switch (action.type) {
    case LocationActionTypes.LOCATION:
      return {
        ...state,
        loading: true,
      };
    case LocationActionTypes.LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        location: action.payload,
      };
    case LocationActionTypes.LOCATION_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        location: null,
      };
    case LocationActionTypes.FOOD_STASH:
      return {
        ...state,
        loading: true,
      };
    case LocationActionTypes.FOOD_STASH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        foodStash: action.location,
      };
    case LocationActionTypes.FOOD_STASH_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        foodStash: null,
      };
    case LocationActionTypes.SUBMIT_ENTRY:
      return {
        ...state,
        loading: true,
      };
    case LocationActionTypes.SUBMIT_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        entry: action.payload,
      };
    case LocationActionTypes.SUBMIT_ENTRY_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        entry: null,
      };
    default:
      return state;
  }
}

const getLocationFeatureState =
  createFeatureSelector<LocationState>('location');

export const location = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.location
);

export const locationLoading = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.loading
);

export const locationLoaded = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.loaded
);

export const locationError = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.error
);

export const foodStash = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.foodStash
);

export const foodStashLoading = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.loading
);

export const foodStashLoaded = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.loaded
);

export const foodStashError = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.error
);

export const submitEntry = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.entry
);

export const SubmitEntryLoading = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.loading
);

export const submitEntryLoaded = createSelector(
  getLocationFeatureState,
  (state: LocationState) => state?.loaded
);
