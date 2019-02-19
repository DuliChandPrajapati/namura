import { NgModule, Component, enableProdMode, ViewChild, OnInit } from '@angular/core';
import * as d3 from "d3";
import { Population, ReportService } from './report.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ReportService]
})
export class ReportsComponent implements OnInit{

    public assetsList:any=[];
    displayedColumns: string[] = ['id','countryName','items','quantity','ramp'];
    dataSource = new MatTableDataSource();
    
    @ViewChild(MatPaginator) paginator: MatPaginator; 
    @ViewChild(MatSort) sort: MatSort;
    
      ngOnInit() {
        this.getAll();
        this.dataSource.paginator = this.paginator;
        
      }
    getAll(){
      this.assetsList=[
      {id:"1",countryName:"Country 1",items:"Item 1",quantity:"3",ramp:"220"},
      {id:"2",countryName:"Country 2",items:"Item 2",quantity:"6",ramp:"2.2"},
      {id:"3",countryName:"Country 3",items:"Item 3",quantity:"35",ramp:"289"},
      {id:"4",countryName:"Country 4",items:"Item 4",quantity:"13",ramp:"1"},
      {id:"5",countryName:"Country 5",items:"Item 5",quantity:"10",ramp:"4"},
      {id:"6",countryName:"Country 6",items:"Item 6",quantity:"2",ramp:"1.91"},
    
    ];
      this.dataSource.data= this.assetsList;
    }

    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
    }
  

}



