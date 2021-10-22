import { Action } from '@ngrx/store';

export const RESTAURANT_STATE = 'Restaurant';

export enum RestaurantActionTypes {
  GET_RESTAURANT_LIST = '[Restaurant] Get Restaurant List',
  GET_RESTAURANT_LIST_SUCCESS = '[Restaurant] Get Restaurant List Success',
  GET_RESTAURANT_LIST_FAIL = '[Restaurant] Get Restaurant List Fail',
  GET_RESTAURANT = '[Restaurant] Get Restaurant',
  GET_RESTAURANT_SUCCESS = '[Restaurant] Get Restaurant Success',
  GET_RESTAURANT_FAIL = '[Restaurant] Get Restaurant Fail',
}

export class GetRestaurantList implements Action {
  readonly type = RestaurantActionTypes.GET_RESTAURANT_LIST;
  constructor(public payload: any) {}
}

export class GetRestaurantListSuccess implements Action {
  readonly type = RestaurantActionTypes.GET_RESTAURANT_LIST_SUCCESS;
  constructor(public payload: any) {}
}

export class GetRestaurantListFail implements Action {
  readonly type = RestaurantActionTypes.GET_RESTAURANT_LIST_FAIL;
  constructor(public payload: any) {}
}

export class GetRestaurant implements Action {
  readonly type = RestaurantActionTypes.GET_RESTAURANT;
  constructor(public payload: any) {}
}

export class GetRestaurantSuccess implements Action {
  readonly type = RestaurantActionTypes.GET_RESTAURANT_SUCCESS;
  constructor(public payload: any) {}
}

export class GetRestaurantFail implements Action {
  readonly type = RestaurantActionTypes.GET_RESTAURANT_FAIL;
  constructor(public payload: any) {}
}

export type RestaurantAction =
  | GetRestaurantList
  | GetRestaurantListSuccess
  | GetRestaurantListFail
  | GetRestaurant
  | GetRestaurantSuccess
  | GetRestaurantFail;
