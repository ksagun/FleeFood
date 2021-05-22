import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AnonymousGuard implements CanActivate, CanLoad {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return !this.isLoggedInActivate(!!this.auth.isLoggedIn());
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return !this.isLoggedInActivate(!!this.auth.isLoggedIn());
  }

  isLoggedInActivate(
    loggedin: boolean
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (loggedin) {
      this.router.navigate(['home']);
    }
    return loggedin;
  }
}
