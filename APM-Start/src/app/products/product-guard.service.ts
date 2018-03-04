import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const id = +route.url[1].path;
    if(isNaN(id) || id < 1){
      alert('Invalid product Id');
      this.router.navigate(['/products']);
      return false
    }
    return true;
  }

}
