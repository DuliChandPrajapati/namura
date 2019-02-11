import { NgModule, Component, enableProdMode } from '@angular/core';

import { Population, ReportService } from './report.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ReportService]
})
export class ReportsComponent  {
  populationData: Population[];

    constructor(service: ReportService) {
        this.populationData = service.getPopulationData();
    }
  


}
