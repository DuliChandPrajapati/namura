import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService implements OnInit {

  constructor(protected snackBar: MatSnackBar, public toastr: ToastrService) { }

  ngOnInit() { }

  /*   showToaster(msg: string) {
        this.snackBar.open(msg, null, {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'right',
            panelClass: 'snack-error'
        });
    }
   */
  showSuccess(msg) {
    this.toastr.success(msg, 'Success!', { timeOut: 3000, closeButton: true });
  }

  showError(msg) {
    this.toastr.error(msg, 'Error!', { timeOut: 2000, closeButton: true });
  }

  showWarning(msg) {
    this.toastr.warning(msg, 'Alert!', { timeOut: 10000, closeButton: true });
  }

  showInfo(msg) {
    this.toastr.info(msg, null, { timeOut: 3000, closeButton: true });
  }

  showCustom(msg) {
    // this.toastr.custom(msg, null, { enableHTML: true,timeOut:3000 }); //ng2-toastr

  }
  clearAll() {
    // this.toastr.clearAllToasts(); //ng2-toastr
  }

}
