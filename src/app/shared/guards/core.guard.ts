import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router, CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoreGuard implements CanLoad  {
  constructor(private router: Router) {
  }
  canLoad(route: Route): boolean {
    let url: string = route.path;
    console.log('Url:'+ url);
    return false;		
  }
}
