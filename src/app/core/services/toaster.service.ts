import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private snackBar: MatSnackBar) { }

  showToaster(msg: string) {
      this.snackBar.open(msg, null, {
          duration: 3000,
      });
  }
}
