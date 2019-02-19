import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatTableDataSource } from '@angular/material';
import { PricingDialogComponentComponent } from '../component/pricing-dialog-component.component';
import { isNullOrUndefined } from 'util';
import { CommonDialogComponent } from 'src/app/shared/common-dialog/common-dialog.component';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  public assetsList:any=[];
  displayedColumns: string[] = ['id', 'ciuType','countryName','minCore','maxCore','price','effectiveFrom','effectiveTo', 'edit','delete'];
  dataSource = new MatTableDataSource();
  
  @ViewChild(MatPaginator) paginator: MatPaginator; 
  @ViewChild(MatSort) sort: MatSort;
    formValueData: any[];
    title: string;
    formtype: string;
    templateList: any;
    selectedPrice: any;
    constructor(private dialog: MatDialog,) { }
  
    ngOnInit() {
      this.getAll();
      this.dataSource.paginator = this.paginator;
      
    }
  getAll(){
    this.assetsList=[
    {id:"1",ciuType:"a1",countryName:"ss",minCore:"2",maxCore:"3",price:"22",effectiveFrom:"20-04-1989",effectiveTo:"20-04-1989"},
    {id:"2",ciuType:"a2",countryName:"ss",minCore:"2",maxCore:"3",price:"22",effectiveFrom:"20-04-1989",effectiveTo:"20-04-1989"},
    {id:"3",ciuType:"a3",countryName:"ss",minCore:"2",maxCore:"3",price:"22",effectiveFrom:"20-04-1989",effectiveTo:"20-04-1989"},
    {id:"4",ciuType:"a4",countryName:"ss",minCore:"2",maxCore:"3",price:"22",effectiveFrom:"20-04-1989",effectiveTo:"20-04-1989"},
    {id:"5",ciuType:"a5",countryName:"ss",minCore:"2",maxCore:"3",price:"22",effectiveFrom:"20-04-1989",effectiveTo:"20-04-1989"},
    {id:"6",ciuType:"a6",countryName:"ss",minCore:"2",maxCore:"3",price:"22",effectiveFrom:"20-04-1989",effectiveTo:"20-04-1989"},
  
  ];
    this.dataSource.data= this.assetsList;
  }
  openDialog(flagValue) {
    if (flagValue == true) {
      this.formValueData = [];
      this.title = 'Add Price';
      this.formtype = 'add';
    } else {
      this.title = 'Edit Price';
      this.formtype = 'edit';
    }
    const dialogRef = this.dialog.open(PricingDialogComponentComponent, {
      data: {
        formName: this.title,
        formType: this.formtype,
        formData: this.formValueData,
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.selectedPrice = null;
      this.formValueData = null;
      if (!isNullOrUndefined(result) && result != '') {
        this.getAll();
        dialogRef.close();
      }
    }, (error) => {
      console.log("Error", error);
    });
  }
  editPricing(form) {
    this.selectedPrice = form.id;
    this.assetsList.forEach(element => {
      if (element.id == this.selectedPrice) {
        this.formValueData = element;
        console.log(this.formValueData);
        this.openDialog(false);
      }
    });
  
  }
  
  deletePrice(form) {
    const dialogRef = this.dialog.open(CommonDialogComponent, {
      data: {
        headerMsg: "Delete Price",
        msgBody: "Are you sure! you want to delete Price?"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!isNullOrUndefined(result) && result.confirm) {
        let priceArray = [];
        priceArray.push(form.id);
        let deletePayLoad = {
          priceKeyList: priceArray
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
