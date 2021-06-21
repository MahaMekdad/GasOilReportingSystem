import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from 'api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






