import { TestComponent } from './components/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from 'api.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FluidLevelMeasurementsComponent } from './components/fluid-level-measurements/fluid-level-measurements.component';
import { WellComponent } from './components/well/well.component';
import { FieldComponent } from './components/field/field.component';
import { ProductionGeneralInfoComponent } from './components/production-general-info/production-general-info.component';
import { DrillingInfoComponent } from './components/drilling-info/drilling-info.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({

  declarations: [
    AppComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    WellComponent,
    FieldComponent,
    ProductionGeneralInfoComponent,
    DrillingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
