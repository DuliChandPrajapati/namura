import {Injectable }from '@angular/core'; 

import {LocalStorageService }from './localStorageService'; 




@Injectable( {

providedIn:'root'

})

export class AuthService {

getToken:any = undefined; 

constructor(private localStorage:LocalStorageService) {




}




getAuthenticate(getValue) {

if (getValue) {

this.getToken = getValue; 

}

else {

this.getToken = undefined; 

}

}







}