import {
  RestaurantAction,
  RestaurantActionTypes,
} from '../state/restaurant.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RestaurantState } from '../model/restaurant-state';

const initialState: RestaurantState = {
  restaurantList: null,
  restaurant: null,
  loading: false,
  loaded: false,
};

export function RestaurantReducer(
  state: RestaurantState = initialState,
  action: RestaurantAction
): RestaurantState {
  switch (action.type) {
    case RestaurantActionTypes.GET_RESTAURANT_LIST:
      return {
        ...state,
        loading: true,
      };
    case RestaurantActionTypes.GET_RESTAURANT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        restaurantList: action.payload,
      };
    case RestaurantActionTypes.GET_RESTAURANT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        restaurantList: null,
      };
    case RestaurantActionTypes.GET_RESTAURANT:
      return {
        ...state,
        loading: true,
      };
    case RestaurantActionTypes.GET_RESTAURANT_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        restaurant: action.payload,
      };
    case RestaurantActionTypes.GET_RESTAURANT_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        restaurant: null,
      };
    default: {
      return state;
    }
  }
}

const getRestaurantFeatureState =
  createFeatureSelector<RestaurantState>('Restaurant');

export const restaurantList = createSelector(
  getRestaurantFeatureState,
  (state: RestaurantState) => state?.restaurantList
);

export const restaurantLoading = createSelector(
  getRestaurantFeatureState,
  (state: RestaurantState) => state?.loading
);

export const restaurantLoaded = createSelector(
  getRestaurantFeatureState,
  (state: RestaurantState) => state?.loaded
);

export const restaurant = createSelector(
  getRestaurantFeatureState,
  (state: RestaurantState) => state?.restaurant
);
