import {Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation }from '@angular/core'; 
import {MatTableDataSource, MatPaginator, MatSort }from '@angular/material'; 

@Component( {
  selector:'app-sales-order', 
  templateUrl:'./sales-order.component.html', 
  styleUrls:['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit,AfterViewInit {
  // public displayedColumns = ['pid', 'quantity','update', 'delete']; 
  public displayedColumns = ['pidinput', 'quantity','actions']; 
  public dataSource = new MatTableDataSource(); 
  constructor() {}
pidelement:any = []; 
@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.getAllOwners(); 
    
  }

  getAllOwners() {

    this.pidelement = [
      {pidinput:'xyz1', quantity:"200"}, 
      {pidinput:'xyz2', quantity:"100"}, 
      {pidinput:'xyz3', quantity:"300"},
      {pidinput:'xyz4', quantity:"190"},
      {pidinput:'xyz1', quantity:"200"}, 
      {pidinput:'xyz2', quantity:"100"}, 
      {pidinput:'xyz3', quantity:"300"},
      {pidinput:'xyz4', quantity:"190"},
      {pidinput:'xyz1', quantity:"200"}, 
      {pidinput:'xyz2', quantity:"100"}, 
      {pidinput:'xyz3', quantity:"300"},
      {pidinput:'xyz4', quantity:"190"}
    ]
    // this.dataSource = this.pidelement; 
    this.dataSource.data= this.pidelement;
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }



}





