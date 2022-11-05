import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root',})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
 
    if (sessionStorage.getItem('login') &&  sessionStorage.getItem('password')) {
         return true;
    }

    else {
      this.router.navigate(['/login']);
       return true;
    }
  }
}
