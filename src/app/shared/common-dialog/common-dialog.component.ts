import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgStyle } from '@angular/common';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-confirm',
  templateUrl: './common-dialog.component.html',
  styleUrls: ['./common-dialog.component.css']
})
export class CommonDialogComponent implements OnInit {

  showOk: boolean;
  showCancel: boolean;
  showMsg:boolean;
  isOsupgrade=false;
  workflowId='';
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data);
    if(data.headerMsg === 'gctError') {
      this.showOk = true;
      data.headerMsg = "Error";
      this.showMsg = true;
      this.showCancel = false;
    }else{
      this.showOk = true;
      this.showCancel = true;
    }
  }
  cancel() {
    this.dialogRef.close({ confirm: false });
  }
  confirm() {
    this.dialogRef.close({ confirm: true });
  }

  ngOnInit() {
    if(!isNullOrUndefined(this.data.isOsupgrade)){
          console.log("this.dad",this.data.process);
          this.isOsupgrade=true;
          this.workflowId=this.data.process.subWorkflowId;
    }
    else
    {
      if (typeof this.data.showOk !== 'undefined') {
        this.showOk = this.data.showOk;
      }
      if (typeof this.data.showCancel !== 'undefined') {
        this.showCancel = this.data.showCancel;
      }
    }
    
  }

}
