import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Login } from './models/login';
import * as LoginReducer from './state/login.reducer';
import * as LoginActions from './state/login.action';
import { LoginState } from './state/models/login-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  login$!: Observable<Login>;
  isLoading$!: Observable<boolean>;
  isLoaded$!: Observable<boolean>;
  sub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store<LoginState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      type: 'email',
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  submit() {
    if (this.form.valid) {
      this.store.dispatch(new LoginActions.LoginUser(this.form.value));
      this.isLoading$ = this.store.pipe(select(LoginReducer.loginLoading));
      this.isLoaded$ = this.store.pipe(select(LoginReducer.loginLoaded));

      /*if (this.sub) this.sub.unsubscribe();
      this.sub = this.store
        .pipe(select(LoginReducer.loginUser))
        .subscribe((s) => {
          if (s) {
            if (s.success) {
              this.router.navigate(['home']);
            } else {
              console.log(s.error);
            }
          }
        });*/
    }
  }
}
