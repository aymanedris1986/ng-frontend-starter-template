import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User } from './interface';
import { Menu } from '@core';
import { map } from 'rxjs/operators';
import {environment} from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url: string = environment.baseApiUrl ;
  constructor(protected http: HttpClient) {}

  login(username: string, password: string, rememberMe = false) {
    return this.http.post<Token>(this.url+'/auth/login', { username, password, rememberMe });
  }

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.post<any>('/auth/logout', {});
  }

  me() {
    return this.http.get<User>(this.url+'/id/me');
  }

  menu() {
    return this.http.get<{ menu: Menu[] }>('/me/menu').pipe(map(res => res.menu));
  }
}
