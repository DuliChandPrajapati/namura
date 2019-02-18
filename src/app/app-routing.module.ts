import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { PricingComponent } from './pricing/page/pricing.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import { Stackd3ChartComponent } from './stackd3-chart/stackd3-chart.component';
import { SettingsComponent } from './common/settings/settings.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { AssetsManagementComponent } from './assets-management/page/assets-management.component';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent,canActivate:[AdminGuard]},
  {path:'reports', component:ReportsComponent,canActivate:[AdminGuard]},
  {path:'order-summary', component:OrderSummaryComponent,canActivate:[AdminGuard]},
  {path:'settings', component:SettingsComponent,canActivate:[AdminGuard]},
  {path:'pricing', component:PricingComponent,canActivate:[AdminGuard]},
  {path:'sales-order', component:SalesOrderComponent,canActivate:[AdminGuard]},
  {path:'assets-management', component:AssetsManagementComponent,canActivate:[AdminGuard]},
  {path:'', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'error', component:ServerErrorComponent},
  {path:'page-not-found', component:PageNotFoundComponent},
  {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
  { path: '**', pathMatch: 'full', redirectTo: 'page-not-found' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
  
})
export class AppRoutingModule { }
