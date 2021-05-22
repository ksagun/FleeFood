import { LoginAction, LoginActionTypes } from '../state/login.action';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './models/login-state';

const initialState: LoginState = {
  login: null,
  loading: false,
  loaded: false,
  error: '',
};

export function LoginReducer(
  state: LoginState = initialState,
  action: LoginAction
): LoginState {
  switch (action.type) {
    case LoginActionTypes.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LoginActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        login: action.payload,
      };
    case LoginActionTypes.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        login: null,
      };
    default:
      return state;
  }
}

const getLoginFeatureState = createFeatureSelector<LoginState>('login');

export const loginUser = createSelector(
  getLoginFeatureState,
  (state: LoginState) => state.login
);

export const loginLoading = createSelector(
  getLoginFeatureState,
  (state: LoginState) => state.loading
);

export const loginLoaded = createSelector(
  getLoginFeatureState,
  (state: LoginState) => state.loaded
);

export const loginError = createSelector(
  getLoginFeatureState,
  (state: LoginState) => state.error
);
