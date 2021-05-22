import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mapTo, tap } from 'rxjs/operators';
import { baseUrl } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser!: string;

  constructor(private http: HttpClient, private route: Router) {}

  login(data: any): Observable<any> {
    //this.http.post(`${baseUrl}login`, data);
    return this.http.post(`${baseUrl}login`, data).pipe(
      map((user: any) => {
        if (user.success) {
          this.setToken(user);
          if (user.jwt && this.getToken()) {
            window.location.reload();
            this.route.navigate(['home']);
          }
        }
      })
    );
    //return this.http.post(`${baseUrl}login`, data);
  }

  setToken(token: any) {
    localStorage.setItem(this.JWT_TOKEN, token.jwt);
  }

  getToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  isLoggedIn(): Boolean {
    return !!this.getToken();
  }
}
