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
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    try {
      const result = await this.userService.checkAuth();
      console.log(result.message);
      if (this.userService.isLogged && result.flag) {
        // logged in so return true
        return true;
      }
      console.log('Auth failed deleting cookies and currentUser');
      this.userService.currentUser = null;
      this.cookieService.delete('paint');
      this.router.navigate(['/login']);
      return false;
    } catch (err) {
      alert(err);
      // not logged in so redirect to login
      this.userService.currentUser = null;
      this.cookieService.delete('paint');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
