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
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './guards/route-guard.service';
import { LogoutGuardService } from './guards/logout-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent,canActivate:[LogoutGuardService] },
  {path: 'registration', component: RegistrationComponent,canActivate:[LogoutGuardService]},
  {path: 'home', component: ProdDashboardComponent,canActivate:[RouteGuardService]},
  {path: 'concessions', component: ConcessionComponent,canActivate:[RouteGuardService]},
  {path: 'well', component: WellTabsComponent,canActivate:[RouteGuardService]},
  {path: 'wellGeneralInfo', component: WellGeneralInfoComponent,canActivate:[RouteGuardService]},
  {path: 'intervalsInfo', component: IntervalsInfoComponent,canActivate:[RouteGuardService]},
  {path: 'tests', component: WellTestTableComponent,canActivate:[RouteGuardService]},
  {path: 'test', component: TestComponent,canActivate:[RouteGuardService]},
  {path: 'test/add/:id', component: TestEditComponent,canActivate:[RouteGuardService]},
  {path: 'test/edit/:id', component: TestEditComponent,canActivate:[RouteGuardService]},
  {path: 'flm', component: FluidLevelMeasurementsComponent,canActivate:[RouteGuardService]},
  {path: 'productionbudget', component: ProductionBudgetComponent,canActivate:[RouteGuardService]},
  {path: 'dashboard', component: ProdDashboardComponent,canActivate:[RouteGuardService]},
  { path: 'home', component: ProdDashboardComponent,canActivate:[RouteGuardService] },
  { path: 'dashboard', component: ProdDashboardComponent,canActivate:[RouteGuardService] },
  { path: 'test', component: ProdDashboardComponent,canActivate:[RouteGuardService] },
  { path: 'dinfo', component: DrillingInfoComponent,canActivate:[RouteGuardService] },
  { path: 'notFound', component: PageNotFoundComponent,canActivate:[RouteGuardService] },
  { path: 'conNav', component: ConcessionNavComponent,canActivate:[RouteGuardService] },
  { path: 'fieldNav', component: FieldNavComponent,canActivate:[RouteGuardService] },
  { path: 'pgi', component: ProductionGeneralInfoComponent,canActivate:[RouteGuardService] },
  { path: 'logout', component: LogoutComponent,canActivate:[RouteGuardService] }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
