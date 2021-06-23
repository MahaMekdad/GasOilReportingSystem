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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppUpdateFieldComponent } from './components/app-update-field/app-update-field.component';
import { AppAddNewFieldComponent } from './components/app-add-new-field/app-add-new-field.component';
import { AppUpdateWellComponent } from './components/app-update-well/app-update-well.component';
import { AppAddNewWellComponent } from './components/app-add-new-well/app-add-new-well.component';

@NgModule({

  declarations: [
    AppComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    WellComponent,
    FieldComponent,
    ProductionGeneralInfoComponent,
    DrillingInfoComponent,
    AppUpdateFieldComponent,
    AppAddNewFieldComponent,
    AppUpdateWellComponent,
    AppAddNewWellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
