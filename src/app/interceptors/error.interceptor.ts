import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        let msg;
        console.log(err.statusText);
        if (err.statusText === 'Unknown Error') {
          msg = 'Something went wrong, Please try again later !';
        } else {
          msg = err.error.error.message || err.statusText;
          if (msg.includes('E11000 duplicate key error')) {
            msg = 'This email is already in use!';
          }
        }
        return throwError(msg);
      })
    );
  }
}
