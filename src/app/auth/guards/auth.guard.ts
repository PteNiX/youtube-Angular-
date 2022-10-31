import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root',})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
 
    if (sessionStorage.getItem('login') &&  sessionStorage.getItem('password')) {
      console.log ('notok');
      console.log(sessionStorage.getItem('login'));

         return true;
    }

    else {
      this.router.navigate(['/youtube/login']);
    console.log ('ok');
       return true;
    }
  }
}
