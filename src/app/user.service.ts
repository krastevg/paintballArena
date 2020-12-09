import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  get isLogged(): boolean {
    return !!this.currentUser;
  }

  apiString = 'http://localhost:3000';
  currentUser: IUser;
  constructor(private http: HttpClient) {}

  login(data: IUser): Observable<IUser> {
    return this.http
      .post(`${this.apiString}/user/login`, data, {
        withCredentials: true,
      })
      .pipe(tap((user: IUser) => (this.currentUser = user)));
  }

  register(data: any): Observable<IUser> {
    return this.http
      .post(`${this.apiString}/user/register`, data, { withCredentials: true })
      .pipe(tap((user: IUser) => (this.currentUser = user)));
  }
}
