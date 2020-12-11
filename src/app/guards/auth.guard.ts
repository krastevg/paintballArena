import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isLogged && !!this.cookieService.get('paint')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login
    this.userService.currentUser = null;
    // console.log(this.cookieService.getAll());
    // console.log(!!this.cookieService.get('paint'));
    // console.log('im here thats why');
    this.router.navigate(['/login']);
    return false;
  }
}
