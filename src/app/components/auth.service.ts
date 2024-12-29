import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../share/user';
import { Observable } from 'rxjs';
import { ILogin } from '../share/login';

const POSTREGISTER = 'https://api.realworld.io/api/users';
const POSTLOGIN = 'https://api.realworld.io/api/users/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register = (register: IUser): Observable<{user: IUser}> => {
    return this.http.post<{ user: IUser }>(POSTREGISTER, { user: register });
  };
  login = (user: ILogin): Observable<ILogin> => {
    return this.http.post<ILogin>(POSTLOGIN, { user });
  };
}
