import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatDialog} from '@angular/material';
import { AssetsManagementDialogComponent } from '../component/assets-management-dialog.component';
import { isNullOrUndefined } from 'util';
import { CommonDialogComponent } from 'src/app/shared/common-dialog/common-dialog.component';

@Component({
  selector: 'app-assets-management',
  templateUrl: './assets-management.component.html',
  styleUrls: ['./assets-management.component.css']
})

export class AssetsManagementComponent implements OnInit,AfterViewInit {
public assetsList:any=[];
displayedColumns: string[] = ['PID', 'AssetsName', 'edit','delete'];
dataSource = new MatTableDataSource();

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  formValueData: any[];
  title: string;
  formtype: string;
  templateList: any;
  selectedAssets: any;
  constructor(private dialog: MatDialog,) { }

  ngOnInit() {
    this.getAll();
    this.dataSource.paginator = this.paginator;
    
  }
getAll(){
  this.assetsList=[
  {pid:"1",assetsName:"a1"},
  {pid:"2",assetsName:"b1"},
  {pid:"3",assetsName:"c1"},
  {pid:"4",assetsName:"c2"},
  {pid:"5",assetsName:"c3"},
  {pid:"6",assetsName:"c4"},

];
  this.dataSource.data= this.assetsList;
}
openDialog(flagValue) {
  if (flagValue == true) {
    this.formValueData = [];
    this.title = 'Add Assets';
    this.formtype = 'add';
  } else {
    this.title = 'Edit Assets';
    this.formtype = 'edit';
  }
  const dialogRef = this.dialog.open(AssetsManagementDialogComponent, {
    data: {
      formName: this.title,
      formType: this.formtype,
      formData: this.formValueData,
    }
  });
  dialogRef.afterClosed().subscribe((result) => {
    this.selectedAssets = null;
    this.formValueData = null;
    if (!isNullOrUndefined(result) && result != '') {
      this.getAll();
      dialogRef.close();
    }
  }, (error) => {
    console.log("Error", error);
  });
}
editAssets(form) {
  this.selectedAssets = form.pid;
  this.assetsList.forEach(element => {
    if (element.pid == this.selectedAssets) {
      this.formValueData = element;
      console.log(this.formValueData);
      this.openDialog(false);
    }
  });

}

deleteAssets(form) {
  const dialogRef = this.dialog.open(CommonDialogComponent, {
    data: {
      headerMsg: "Delete Assets",
      msgBody: "Are you sure! you want to delete Assets?"
    }
  });
  dialogRef.afterClosed().subscribe((result) => {
    if (!isNullOrUndefined(result) && result.confirm) {
      let asstesArray = [];
      asstesArray.push(form.pid);
      let deletePayLoad = {
        assetsKeyList: asstesArray
      }
      console.log(deletePayLoad);
    }
  }, (error) => {
    console.log("Error", error);
  });
}

ngAfterViewInit(): void {
  this.dataSource.sort = this.sort;
}
}
