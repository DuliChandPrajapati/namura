// import { Component, OnInit } from '@angular/core';
// import { routerNgProbeToken } from '@angular/router/src/router_module';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {

//   constructor(private router: Router) { }

//   ngOnInit() {
//   }

//   logout(){
//     this.router.navigate(['/core/login']);
//   }
// }

import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute} from '@angular/router';

import { LocalStorageService } from 'src/app/shared/services/localStorageService';




@Component({

selector: 'app-header',

templateUrl: './header.component.html',

styleUrls: ['./header.component.css']

})

export class HeaderComponent implements OnInit{

public hiddenHeader:boolean=true;

public headerValue:any;




constructor(private router: Router,

private localStorage: LocalStorageService,

private activeRoute:ActivatedRoute

) { }




ngOnInit() {

}




ngAfterContentChecked() {

this.headerValue = this.localStorage.getKey('admin');

this.setHeader();




}

setHeader() {

if (this.headerValue !=null) {

this.hiddenHeader=false;

}

else {

this.hiddenHeader=true;

} 




}




logout(){

localStorage.clear();

this.router.navigate(['login'], { relativeTo: this.activeRoute });

this.hiddenHeader=true;

this.headerValue=null;

}

}