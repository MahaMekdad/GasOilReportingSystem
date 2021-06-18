import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from 'api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProductionBudgetComponent } from './components/production-budget/production-budget.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FluidLevelMeasurementsComponent } from './components/fluid-level-measurements/fluid-level-measurements.component';
import { WellGeneralInfoComponent } from './components/well-general-info/well-general-info.component';

@NgModule({

  declarations: [
    AppComponent,
    RegistrationComponent,
    ProductionBudgetComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    WellGeneralInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
