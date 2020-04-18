import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { CustomerService } from '../customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;


  constructor(private cusomerSvc: CustomerService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const name = next.url[1].path;
    // const id2 = next.paramMap.get('id');
    // console.log(id2);
    console.log(name)
    if (name != null && name != undefined && this.cusomerSvc.userLogin) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }



}
