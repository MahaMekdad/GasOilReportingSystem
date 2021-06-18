import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from 'api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductionBudgetComponent } from './components/production-budget/production-budget.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FluidLevelMeasurementsComponent } from './components/fluid-level-measurements/fluid-level-measurements.component';
import { LabMeasurementComponent } from './components/lab-measurement/lab-measurement.component';
import { DailyActionsComponent } from './components/daily-actions/daily-actions.component';

@NgModule({

  declarations: [
    AppComponent,
    ProductionBudgetComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    LabMeasurementComponent,
    DailyActionsComponent,

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
