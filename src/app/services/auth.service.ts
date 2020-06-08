import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Token} from '../models/token';
import {JwtHelper} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://uber-ac-wk-mk.herokuapp.com/api';

  constructor(private http: HttpClient) {
  }

  authenticate(credentials) {
    return this.http.post(this.url + '/user/auth', {
      login: credentials.login,
      password: credentials.password
    }).pipe(
      map((result: Token) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          localStorage.setItem('login', credentials.login)
          return true;
        }
        return false;
      })
    );
  }

  createOrUpdate(credentials) {
    return this.http.post(this.url + '/user/create', credentials);
  }

  logout() {
    return this.http.delete(this.url + '/user/logout/' + this.currentUser.userId)
      .pipe(
        map(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('login');
        })
      );
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return !(jwtHelper.isTokenExpired(token));
  }

  get currentUser() {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    return new JwtHelper().decodeToken(token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getLogin(){
    return localStorage.getItem('login');
  }
}
