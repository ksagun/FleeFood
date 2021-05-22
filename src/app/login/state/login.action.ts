import { Action } from '@ngrx/store';
import { Login } from '../models/login';

export enum LoginActionTypes {
  LOGIN = '[Login] Login',
  LOGIN_SUCCESS = '[Login] Login Success',
  LOGIN_FAIL = '[Login] Login Fail',
}

export class LoginUser implements Action {
  readonly type = LoginActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LoginFail implements Action {
  readonly type = LoginActionTypes.LOGIN_FAIL;
  constructor(public payload: any) {}
}

export type LoginAction = LoginUser | LoginSuccess | LoginFail;
