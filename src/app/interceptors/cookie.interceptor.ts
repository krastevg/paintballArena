import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CookieInterceptor implements HttpInterceptor {
  constructor(
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const cookie = !!this.cookieService.get('paint');
    if (cookie && this.userService.isLogged) {
      request = request.clone({
        withCredentials: true,
      });
    }

    return next.handle(request);
  }
}
