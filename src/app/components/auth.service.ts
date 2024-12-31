import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { Observable, tap } from 'rxjs';
import {
  IUserAutenticated,
  IUserLogin,
  IUserRegistration,
} from '../share/shareInterfaces';

const REGISTER = 'https://api.realworld.io/api/users';
const LOGIN = 'https://api.realworld.io/api/users/login';
const GETUSER = 'https://api.realworld.io/api/user';
const CORS_URL = 'https://cors-anywhere.herokuapp.com/' /**Não funciona bem */

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**temos 3 diferentes estado, undefine: não existe, null: não logado e User: logado, esta variaval noticará a aplicação em qualquer lugar, assim q houve mudanças */
  currentUserSig = signal<IUserAutenticated | undefined | null>(undefined);

  constructor(private http: HttpClient) {}

  register = (
    register: IUserRegistration
  ): Observable<{ user: IUserAutenticated }> => {
    return this.http
      .post<{ user: IUserAutenticated }>(REGISTER, { user: register })
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.user.token);
          return this.currentUserSig.set(res.user);
        })
      );
  };

  login = (user: IUserLogin): Observable<IUserLogin> => {
    return this.http.post<IUserLogin>(LOGIN,  user );
  };

  getUser = () =>  {
    return this.http.get<{user: IUserAutenticated}>(GETUSER);
  }
}
