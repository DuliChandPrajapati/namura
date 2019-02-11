import { Injectable, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToasterService implements OnInit{

  constructor(protected snackBar: MatSnackBar) { }

  ngOnInit(){}

  showToaster(msg: string) {
      this.snackBar.open(msg, null, {
          duration: 3000,
      });
  }
}
