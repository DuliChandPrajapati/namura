import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { ToastrModule } from 'ngx-toastr';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReportsComponent } from './reports/reports.component';
import { PricingComponent } from './pricing/pricing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './common/header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './common/footer/footer.component';
import { SettingsComponent } from './common/settings/settings.component';
import { MatSidenavModule } from '@angular/material';
import {MatModule} from './shared/mat.module'

import { DxChartModule } from 'devextreme-angular';
import { APP_RESOLVER_PROVIDERS } from './core/services/app.resolver';
import { AppState, InternalStateType } from './core/services/app.service';

import { Stackd3ChartComponent } from './stackd3-chart/stackd3-chart.component';
import { DoughnutChartComponent,PieChartComponent , BarChartComponent } from 'angular-d3-charts';
import { ServerErrorComponent } from './server-error/server-error.component';


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
    ServerErrorComponent
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
    FlexLayoutModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
    ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
