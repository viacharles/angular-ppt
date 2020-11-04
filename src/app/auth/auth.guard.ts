import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private $auth: AuthService,
    private router: Router
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === '/') {
      this.router.navigate(['/boards']);
    }
    return true;
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(state.url);
    if (state.url === '/') {
      this.router.navigate(['/boards']);
    }
    if (state.url === '/landing') {
      if (this.$auth.isLogin) {
        this.router.navigate(['/boards']);
        return false;
      }
    }
    return true;
  }


}
