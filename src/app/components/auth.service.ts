import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { IUserAutenticated, IUserLogin, IUserRegistration } from '../share/shareInterfaces';



const REGISTER = 'https://api.realworld.io/api/users';
const LOGIN = 'https://api.realworld.io/api/users/login';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient) {}


  register = (register: IUserRegistration): Observable<{user: IUserAutenticated}> => {    
    return this.http.post<{ user: IUserAutenticated }>(REGISTER, { user: register });
  };

  login = (user: IUserLogin): Observable<IUserLogin> => {
    return this.http.post<IUserLogin>(LOGIN, { user });
  };
}
