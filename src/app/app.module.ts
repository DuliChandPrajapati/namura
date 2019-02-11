import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ReportsComponent } from './reports/reports.component';
import { PricingComponent } from './pricing/pricing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './common/header/header.component';


import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { DxChartModule } from 'devextreme-angular';
import { LoginComponent } from './login/login.component';
import { Stackd3ChartComponent } from './stackd3-chart/stackd3-chart.component';

import { APP_RESOLVER_PROVIDERS } from './core/services/app.resolver';
import { AppState, InternalStateType } from './core/services/app.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule} from "@angular/material";
import { LayoutModule } from '@angular/cdk/layout';
import { FooterComponent } from './common/footer/footer.component';
import { SettingsComponent } from './common/settings/settings.component';



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
    SettingsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    DxChartModule,
    MatSnackBarModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule
    ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
