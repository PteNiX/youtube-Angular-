import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, Router, UrlTree } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (sessionStorage.getItem('login') && sessionStorage.getItem('password')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return true;
    }
  }
}
