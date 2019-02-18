import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../shared/services/localStorageService';
import { AuthService } from '../shared/services/authService';
import { ToasterService } from '../core/services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
signUp:boolean=true;
signIn:boolean=false;

  constructor(
    private router: Router,
    private localStorage:LocalStorageService,
    private authService:AuthService,
    private activateRoute:ActivatedRoute,
    private tosterService:ToasterService) { }

signUpModel:any={};
signInModel: any = {};
userRole:any=[{id:'Administrator'},{id:'User'}]
  ngOnInit() {
    let getKey = this.localStorage.getKey('admin');
        this.authService.getAuthenticate(getKey);
  }
  login() : void {
console.log(this.signInModel);
   // if(this.signInModel.username == 'admin' && this.signInModel.password == 'admin'){
      this.localStorage.setKey("admin",this.signInModel.username);
      let getToken=this.localStorage.getKey('admin');
      this.authService.getAuthenticate(getToken);
     this.router.navigate(['/dashboard'],{relativeTo:this.activateRoute});
     this.tosterService.showSuccess( this.signInModel.username+" succefully login");
  // }else {
     // this.tosterService.showError('Invalid credentials');
 //  }
  }
  signup() : void {  
    this.tosterService.showSuccess(this.signUpModel.displayname+" succefully created");
    console.log(this.signUpModel);
    this.signUp=true;
    this.signIn=false;
   // this.router.navigate(['/login'],{relativeTo:this.activateRoute});
   
  }
  toggel(){
    this.signIn=!this.signIn;
    this.signUp=!this.signUp;
  }
  }

