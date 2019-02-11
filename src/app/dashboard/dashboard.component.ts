import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../core/services';


 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private toasterService: ToasterService ) {
}

ngOnInit() {
  this.toasterService.showToaster('Hello World');
}

}


