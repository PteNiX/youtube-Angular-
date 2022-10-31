import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if ('1' == '1') {
      this.router.navigate(['(login)']);
      console.log('notok');
      return true;
    }
    console.log('ok');
    return true;
  }
}
