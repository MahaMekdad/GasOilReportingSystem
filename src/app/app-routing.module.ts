import { ProductionGeneralInfoComponent } from './components/production-general-info/production-general-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TestEditComponent } from './components/test-edit/test-edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommonModule} from '@angular/common';

import {ProdDashboardComponent} from './components/prod-dashboard/prod-dashboard.component';
import {ConcessionComponent} from './components/concession/concession.component';
import {WellTestTableComponent} from './components/well-test-table/well-test-table.component';
import {ProductionBudgetComponent} from './components/production-budget/production-budget.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {FluidLevelMeasurementsComponent} from './components/fluid-level-measurements/fluid-level-measurements.component';
import {TestComponent} from './components/test/test.component';
import {IntervalsInfoComponent} from './components/intervals-info/intervals-info.component';
import {WellGeneralInfoComponent} from './components/well-general-info/well-general-info.component';
import {WellTabsComponent} from './components/well-tabs/well-tabs.component';
import { LoginComponent } from './components/login/login.component';
import {DrillingInfoComponent} from './components/drilling-info/drilling-info.component';
import { ConcessionNavComponent } from './components/concession-nav/concession-nav.component';
import { FieldNavComponent } from './components/field-nav/field-nav.component';
import { WellGeneralInfoChartComponent } from './well-general-info-chart/well-general-info-chart.component';
import { LabMeasurementComponent } from './components/lab-measurement/lab-measurement.component';
import { DailyActionsComponent } from './components/daily-actions/daily-actions.component';


const routes: Routes = [
  {path: 'home', component: ProdDashboardComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'concessions', component: ConcessionComponent},
  {path: 'well', component: WellTabsComponent},
  {path: 'wellGeneralInfo', component: WellGeneralInfoComponent},
  {path: 'intervalsInfo', component: IntervalsInfoComponent},
  {path: 'tests', component: WellTestTableComponent},
  {path: 'test', component: TestComponent},
  {path: 'test/add/:id', component: TestEditComponent},
  {path: 'test/edit/:id', component: TestEditComponent},
  {path: 'flm', component: FluidLevelMeasurementsComponent},
  {path: 'productionbudget', component: ProductionBudgetComponent},
  {path: 'dashboard', component: ProdDashboardComponent},
  { path: 'home', component: ProdDashboardComponent },
  { path: 'dashboard', component: ProdDashboardComponent },
  { path: 'test', component: ProdDashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dinfo', component: DrillingInfoComponent },
  { path: 'notFound', component: PageNotFoundComponent },
  { path: 'conNav', component: ConcessionNavComponent },
  { path: 'fieldNav', component: FieldNavComponent },
  { path: 'pgi', component: ProductionGeneralInfoComponent },
  {path:'chartTest',component:WellGeneralInfoChartComponent},
  {path:'labs',component:LabMeasurementComponent},
  {path:'reports',component:DailyActionsComponent}


];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
