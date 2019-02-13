import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authService';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate  {
  constructor(private authService:AuthService,private _router:Router,private activeRoute:ActivatedRoute){
    }
    
    canActivate(next: ActivatedRouteSnapshot, state:
    RouterStateSnapshot): Observable<boolean>
    | Promise<boolean> | boolean
    {
    
    console.log(this.authService.getToken);
    
    if (this.authService.getToken) {
    
    console.log("i am in guard");
    
    return true;
    
    }
    
    //else{
    
    console.log("i am not in guard ");
    
    this._router.navigate(['/login']);
    
    return false;
    
    // }
    
    
    }
  
}
