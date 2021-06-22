import { TestEditComponent } from './components/test-edit/test-edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { ProdDashboardComponent } from './components/prod-dashboard/prod-dashboard.component';
import { ConcessionComponent } from './components/concession/concession.component';
import { WellTestTableComponent } from './components/well-test-table/well-test-table.component';
import { ProductionBudgetComponent } from './components/production-budget/production-budget.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FluidLevelMeasurementsComponent } from './components/fluid-level-measurements/fluid-level-measurements.component';
import { TestComponent } from './components/test/test.component';
import { IntervalsInfoComponent } from './components/intervals-info/intervals-info.component';
import { WellGeneralInfoComponent } from './components/well-general-info/well-general-info.component';
import { LoginComponent } from './components/login/login.component';
import {DrillingInfoComponent} from './components/drilling-info/drilling-info.component';

const routes: Routes = [
  { path: 'home', component: ProdDashboardComponent },
  { path: 'dashboard', component: ProdDashboardComponent },
  { path: 'concessions', component: ConcessionComponent },
  { path: 'tests', component: WellTestTableComponent },
  { path: 'flm', component: FluidLevelMeasurementsComponent },
  { path: 'test', component: TestComponent },
  { path: 'productionbudget', component: ProductionBudgetComponent },
  // { path: 'login', component: ProdDashboardComponent },
  // { path: 'registration', component: ProdDashboardComponent },
  { path: 'test', component: ProdDashboardComponent },
  { path: 'productionbudget', component: ProductionBudgetComponent },
  { path: 'test/add/:id', component: TestEditComponent },
  { path: 'test/edit/:id', component: TestEditComponent },
  { path: 'flm', component: FluidLevelMeasurementsComponent},
  { path: 'test', component: TestComponent},
  { path: 'productionbudget', component: ProductionBudgetComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'intervalsInfo', component: IntervalsInfoComponent },
  { path: 'wellGeneralInfo', component: WellGeneralInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dinfo', component: DrillingInfoComponent }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
