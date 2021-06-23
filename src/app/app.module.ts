import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ApiModule} from 'api.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {NavComponent} from './components/nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {ProdDashboardComponent} from './components/prod-dashboard/prod-dashboard.component';
import {ConcessionComponent} from './components/concession/concession.component';
import {WellTestTableComponent} from './components/well-test-table/well-test-table.component';
import {RegistrationComponent} from './components/registration/registration.component';

import {ProductionBudgetComponent} from './components/production-budget/production-budget.component';
import {FluidLevelMeasurementsComponent} from './components/fluid-level-measurements/fluid-level-measurements.component';
import {TestComponent} from './components/test/test.component';
import {TestEditComponent} from './components/test-edit/test-edit.component';
import {IntervalsInfoComponent} from './components/intervals-info/intervals-info.component';
import {WellGeneralInfoComponent} from './components/well-general-info/well-general-info.component';
import {MaterialModule} from './material/material.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {WellTabsComponent} from './components/well-tabs/well-tabs.component';
import { ConfirmationComponent } from './components/general/confirmation/confirmation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BudgetActualComponent } from './components/budget-actual/budget-actual.component';
import { ConcessionAddComponent } from './dialogs/add/concession-add/concession-add.component';
import { ConcessionDeleteComponent } from './dialogs/delete/concession-delete/concession-delete.component';
import { ConcessionEditComponent } from './dialogs/edit/concession-edit/concession-edit.component';
import { WellTestAddComponent } from './dialogs/add/well-test-add/well-test-add.component';
import { WellTestEditComponent } from './dialogs/edit/well-test-edit/well-test-edit.component';
import { WellTestDeleteComponent } from './dialogs/delete/well-test-delete/well-test-delete.component';
import { BudgetActualDeleteComponent } from './dialogs/delete/budget-actual-delete/budget-actual-delete.component';
import { BudgetActualEditComponent } from './dialogs/edit/budget-actual-edit/budget-actual-edit.component';
import { BudgetActualAddComponent } from './dialogs/add/budget-actual-add/budget-actual-add.component';

@NgModule({

  declarations: [
    AppComponent,
    ProductionBudgetComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    NavComponent,
    ProdDashboardComponent,
    ConcessionComponent,
    WellTestTableComponent,
    TestEditComponent,
    RegistrationComponent,
    ProductionBudgetComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    IntervalsInfoComponent,
    WellGeneralInfoComponent,
    WellTabsComponent,
    ConfirmationComponent,
    BudgetActualComponent,
    ConcessionAddComponent,
    ConcessionDeleteComponent,
    ConcessionEditComponent,
    WellTestAddComponent,
    WellTestEditComponent,
    WellTestDeleteComponent,
    BudgetActualDeleteComponent,
    BudgetActualEditComponent,
    BudgetActualAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
