import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  createUser(Email, Username, Password): Observable<any> {
    const body = {email: Email, username: Username, password: Password};
    return this.http.post(this.baseurl + '/api/v1/auth/users/', body);
  }

  getToken(Username, Password): Observable<any> {
    const body = {username: Username, password: Password};
    return this.http.post(this.baseurl + '/api/v1/auth-token/token/login/', body);
  }

  getUserWithToken(Token): Observable<any> {
    const body = {};
    return this.http.post(environment.apiUrl + '/api/v1/user/user/by/token', body,
      {headers: {'Content-Type': 'application/json', Authorization: 'Token ' + Token}});
  }
}
