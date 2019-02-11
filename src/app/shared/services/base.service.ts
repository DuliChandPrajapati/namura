import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class BaseService {
  protected prefix = '/v1/';
  protected headers = new HttpHeaders({ 'Content-Type': 'application/json'});
  protected options = { headers: this.headers };
  private router: Router ;
  constructor(private http: HttpClient) {

  }


  getData(url, header?) {

    const headers = header || this.options;
    return this.http.get(this.prefix +  url, headers).pipe(
      map(response => { return response;
      }),
      catchError(this.handleError)
    );

  }

  sendData(url , resource, header?) {
    // const x = this.setCustomHeaders(resource);
    let headers = header || this.options;;
    // if (x) {
    //    headers = x;
    // } else {
    //    headers = header || this.options;
    // }

    try {
    return this.http.post(this.prefix +  url , resource, headers).pipe(
      map(response => { return response;
      }),
      catchError(this.handleError)
    );
    } catch (e) {
     }
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Server error');
 }
 /******************not user this function**********/
  setCustomHeaders(data: any | Object , returnobj = false ) {
    if (data.hasOwnProperty('promotionId')) {
      const id = data['promotionId'].toString();
      const xx = {'promotionId': id};
      if (returnobj) {
        const _headers = new HttpHeaders(xx);
        return { headers: _headers };
      } else {
        const _headers = new HttpHeaders(xx);
        this.options = { headers: _headers };
      }

    } else {
      this.options.headers =  this.headers;
    }
 }
/******************not user this function**********/
}
