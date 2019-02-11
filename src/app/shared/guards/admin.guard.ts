import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

class UserToken {};
class Permissions {
  canActivate(user: UserToken, id: string): boolean {
    return true;
  }
}

export class AdminGuard  {

  
}
