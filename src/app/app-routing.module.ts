
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './guards/route-guard.service';
import { LogoutGuardService } from './guards/logout-guard.service';
import { AdminAssignRolesComponent } from './components/admin-assign-roles/admin-assign-roles.component';
import { WellNavComponent } from './components/well-nav/well-nav.component';
import { FieldComponent } from './components/field/field.component';
import { WellComponent } from './components/well/well.component';
import { ProductionGeneralInfoComponent } from './components/production-general-info/production-general-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
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
import { WellTabsComponent } from './components/well-tabs/well-tabs.component';
import { LoginComponent } from './components/login/login.component';
import { DrillingInfoComponent } from './components/drilling-info/drilling-info.component';
import { ConcessionNavComponent } from './components/concession-nav/concession-nav.component';
import { FieldNavComponent } from './components/field-nav/field-nav.component';
import { WellGeneralInfoChartComponent } from './well-general-info-chart/well-general-info-chart.component';
import { LabMeasurementComponent } from './components/lab-measurement/lab-measurement.component';
import { DailyActionsComponent } from './components/daily-actions/daily-actions.component';
import { BudgetActualComponent } from './components/budget-actual/budget-actual.component';
import { ConNavGuardService } from './guards/ConNavGuardService';
import { AdminGuardService } from './guards/AdminGuardService';

const routes: Routes = [
  { path: '', component: ProdDashboardComponent },
  { path: 'registration', component: RegistrationComponent, canActivate: [LogoutGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuardService] },

  { path: 'home', component: ProdDashboardComponent, canActivate: [RouteGuardService] },
  { path: 'dashboard', component: ProdDashboardComponent, canActivate: [RouteGuardService] },

  { path: 'concessions', component: ConcessionComponent, canActivate: [RouteGuardService] },
  { path: 'wells', component: WellComponent, canActivate: [RouteGuardService] },
  { path: 'fields', component: FieldComponent, canActivate: [RouteGuardService] },
  // { path: 'well', component: WellTabsComponent, canActivate: [RouteGuardService] },

  { path: 'wellGeneralInfo', component: WellGeneralInfoComponent, canActivate: [RouteGuardService] },
  { path: 'intervalsInfo', component: IntervalsInfoComponent, canActivate: [RouteGuardService] },
  { path: 'tests', component: WellTestTableComponent, canActivate: [RouteGuardService] },
  { path: 'flm', component: FluidLevelMeasurementsComponent, canActivate: [RouteGuardService] },
  { path: 'dinfo', component: DrillingInfoComponent, canActivate: [RouteGuardService] },
  { path: 'pgi', component: ProductionGeneralInfoComponent, canActivate: [RouteGuardService] },
  { path: 'reports', component: DailyActionsComponent, canActivate: [RouteGuardService] },
  { path: 'labs', component: LabMeasurementComponent, canActivate: [RouteGuardService] },
  { path: 'chartTest', component: WellGeneralInfoChartComponent, canActivate: [RouteGuardService] },
  
  { path: 'budgetActual', component: BudgetActualComponent, canActivate: [RouteGuardService, ConNavGuardService] },
  { path: 'productionbudget', component: ProductionBudgetComponent, canActivate: [RouteGuardService, ConNavGuardService] },

  { path: 'test/add/:id', component: TestEditComponent, canActivate: [RouteGuardService] },
  { path: 'test/edit/:id', component: TestEditComponent, canActivate: [RouteGuardService] },

  { path: 'conNav', component: ConcessionNavComponent, canActivate: [RouteGuardService, ConNavGuardService] },
  { path: 'fieldNav/:id', component: FieldNavComponent, canActivate: [RouteGuardService, ConNavGuardService] },
  { path: 'wellNav/:id', component: WellNavComponent, canActivate: [RouteGuardService, ConNavGuardService] },
  { path: 'well/:id', component: WellTabsComponent, canActivate: [RouteGuardService, ConNavGuardService] },
  
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  
  { path: 'adminManageRoles', component: AdminAssignRolesComponent, canActivate: [RouteGuardService, AdminGuardService] },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
