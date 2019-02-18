import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReportsComponent } from './reports/reports.component';
import { PricingComponent } from './pricing/page/pricing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { SettingsComponent } from './common/settings/settings.component';
import { MatSidenavModule,MatTableModule,MatSortModule,MatPaginatorModule,MatDialogModule} from '@angular/material';
import { MatModule } from './shared/mat.module'

import { DxChartModule } from 'devextreme-angular';
import { APP_RESOLVER_PROVIDERS } from './core/services/app.resolver';
import { AppState, InternalStateType } from './core/services/app.service';

import { Stackd3ChartComponent } from './stackd3-chart/stackd3-chart.component';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';
import { ServerErrorComponent } from './server-error/server-error.component';
import { AssetsManagementComponent } from './assets-management/page/assets-management.component';
import { AssetsManagementDialogComponent } from './assets-management/component/assets-management-dialog.component';
import { CommonDialogComponent } from './shared/common-dialog/common-dialog.component';
import { PricingDialogComponentComponent } from './pricing/component/pricing-dialog-component.component';


const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SalesOrderComponent,
    OrderSummaryComponent,
    ReportsComponent,
    PricingComponent,
    PageNotFoundComponent,
    HeaderComponent,
    LoginComponent,
    Stackd3ChartComponent,
    FooterComponent,
    SettingsComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent,
    ServerErrorComponent,
    AssetsManagementComponent,
    AssetsManagementDialogComponent,
    CommonDialogComponent,
    PricingDialogComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    DxChartModule,
    MatModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  entryComponents: [AssetsManagementDialogComponent,CommonDialogComponent,PricingDialogComponentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
