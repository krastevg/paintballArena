import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.userService.isLogged && !this.cookieService.get('paint')) {
      return true;
    }
    alert('You were logged out and will be redirected to the login page');
    // not logged in so redirect to login
    this.userService.currentUser = null;
    this.cookieService.delete('paint');
    console.log(this.cookieService.get('paint'), this.userService.currentUser);
    this.router.navigate(['/login']);
    return false;
  }
}
