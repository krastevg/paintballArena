import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from '../interfaces/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  get isLogged(): boolean {
    return !!this.currentUser;
  }

  apiString = `${environment.apiUrl}`;
  currentUser: IUser;
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.currentUser = null;
  }

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

  async checkAuth(): Promise<any> {
    return await this.http
      .get(`${this.apiString}/user/checkAuth`, {
        withCredentials: true,
      })
      .toPromise();
  }

  logout(): void {
    console.log('im called !');
    this.currentUser = null;
    this.cookieService.delete('paint');
    this.router.navigate(['/login']);
  }
}
