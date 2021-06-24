import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from 'api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { HighchartsChartModule } from 'highcharts-angular';
// import { ChartModule } from 'angular-highcharts';
// import { ChartsModule } from 'ng2-charts';
import { NgChartjsModule } from 'ng-chartjs';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxPaginationModule } from 'ngx-pagination';





// import { NavComponent } from './components/nav/nav.component';
// import { ProdDashboardComponent } from './components/prod-dashboard/prod-dashboard.component';
import { ConcessionComponent } from './components/concession/concession.component';
import { WellTestTableComponent } from './components/well-test-table/well-test-table.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProductionBudgetComponent } from './components/production-budget/production-budget.component';
import { FluidLevelMeasurementsComponent } from './components/fluid-level-measurements/fluid-level-measurements.component';
import { LabMeasurementComponent } from './components/lab-measurement/lab-measurement.component';
import { DailyActionsComponent } from './components/daily-actions/daily-actions.component';
import { TestComponent } from './components/test/test.component';
import { TestEditComponent } from './components/test-edit/test-edit.component';
import { IntervalsInfoComponent } from './components/intervals-info/intervals-info.component';
import { WellGeneralInfoComponent } from './components/well-general-info/well-general-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewReportComponent } from './add-new-report/add-new-report.component';
import { UpdateReportComponent } from './update-report/update-report.component';
import { AddNewLabComponent } from './add-new-lab/add-new-lab.component';
import { UpdateLabComponent } from './update-lab/update-lab.component';
import { ChartS1DateComponent } from './chart-s1-date/chart-s1-date.component';
import { DatePipe } from '@angular/common';


@NgModule({

  declarations: [
    AppComponent,
    ProductionBudgetComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    LabMeasurementComponent,
    DailyActionsComponent,
    // NavComponent,
    // ProdDashboardComponent,
    ConcessionComponent,
    WellTestTableComponent,
    TestEditComponent,
    RegistrationComponent,
    ProductionBudgetComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    IntervalsInfoComponent,
    WellGeneralInfoComponent,
    AddNewReportComponent,
    UpdateReportComponent,
    AddNewLabComponent,
    UpdateLabComponent,
    ChartS1DateComponent,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserAnimationsModule,
    // MatDatepickerModule, MomentDateModule,
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    NgApexchartsModule,

    // HighchartsChartModule,
    // ChartModule,
    NgChartjsModule,
    NgxPaginationModule
        // HttpModule,
    // MdCardModule
  ],

  providers: [
    DatePipe

    // {
    //   provide: MAT_DATE_FORMATS,
    //   useValue: {
    //     parse: {
    //       dateInput: ['l', 'LL'],
    //     },
    //     display: {
    //       dateInput: 'L',
    //       monthYearLabel: 'MMM YYYY',
    //       dateA11yLabel: 'LL',
    //       monthYearA11yLabel: 'MMMM YYYY',
    //     },
    //   },
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule { }






