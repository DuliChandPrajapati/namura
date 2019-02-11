import { Component, OnInit } from '@angular/core';
import { AppState } from '../core/services/app.service';

declare let d3: any;
declare let $: any;

@Component({
  selector: 'app-stackd3-chart',
  templateUrl: './stackd3-chart.component.html',
  styleUrls: ['./stackd3-chart.component.css']
})
export class Stackd3ChartComponent implements OnInit {


  constructor() { }
  private test2 = 'test2'
  public colors = ['red', 'green', 'blue']
  public dataColumns = [3]; 
  public barChartData = [{
    id: 0,
    label: 'USA',
    value1: 10,
    value2: 10,
    value3: 10,
  }, {
    id: 1,
    label: 'UK',
    value1: 10,
    value2: 10,
    value3: 10,
  }]

  ngOnInit() {
  }

}
