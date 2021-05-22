import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import * as LoginActions from './login.action';
import { Login } from '../models/login';

@Injectable()
export class LoginEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  @Effect()
  loginUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginActions.LoginUser>(LoginActions.LoginActionTypes.LOGIN),
    mergeMap((params) => {
      return this.authService.login(params.payload).pipe(
        map((login: Login) => new LoginActions.LoginSuccess(login)),
        catchError((err) => of(new LoginActions.LoginFail(err)))
      );
    })
  );
}
