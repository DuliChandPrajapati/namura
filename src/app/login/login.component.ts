import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../shared/services/localStorageService';
import { AuthService } from '../shared/services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private localStorage:LocalStorageService,private authService:AuthService,private activateRoute:ActivatedRoute) { }


username: string;
password: string;
  ngOnInit() {
  }
  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      this.localStorage.setKey("admin","admin");
      let getToken=this.localStorage.getKey('admin');
      this.authService.getAuthenticate(getToken);
     this.router.navigate(['/dashboard'],{relativeTo:this.activateRoute});
    }else {
      alert("Invalid credentials");
    }
  }
  }

