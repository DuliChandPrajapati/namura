import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { PricingComponent } from './pricing/pricing.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { Stackd3ChartComponent } from './stackd3-chart/stackd3-chart.component';
import { SettingsComponent } from './common/settings/settings.component';

const routes: Routes = [
  {path:'home', component:DashboardComponent},
  {path:'reports', component:ReportsComponent},
  {path:'order-summary', component:OrderSummaryComponent},
  {path:'settings', component:SettingsComponent},
  {path:'pricing', component:PricingComponent},
  {path:'sales-order', component:SalesOrderComponent},
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent},
  {path:'page-not-found', component:PageNotFoundComponent},
  {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
  { path: '**', pathMatch: 'full', redirectTo: 'page-not-found' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
