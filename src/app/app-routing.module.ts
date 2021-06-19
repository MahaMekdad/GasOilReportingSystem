import { TestEditComponent } from './components/test-edit/test-edit.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProdDashboardComponent } from './components/prod-dashboard/prod-dashboard.component';
import { ConcessionComponent } from './components/concession/concession.component';
import { WellTestTableComponent } from './components/well-test-table/well-test-table.component';
import { ProductionBudgetComponent } from './components/production-budget/production-budget.component';
import { FluidLevelMeasurementsComponent } from './components/fluid-level-measurements/fluid-level-measurements.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path: 'home', component: ProdDashboardComponent },
  { path: 'dashboard', component: ProdDashboardComponent },
  { path: 'concessions', component: ConcessionComponent },
  { path: 'tests', component: WellTestTableComponent },
  { path: 'flm', component: FluidLevelMeasurementsComponent },
  { path: 'test', component: TestComponent },
  { path: 'productionbudget', component: ProductionBudgetComponent },
  { path: 'login', component: ProdDashboardComponent },
  { path: 'registration', component: ProdDashboardComponent },
  { path: 'test', component: ProdDashboardComponent },
  { path: 'productionbudget', component: ProductionBudgetComponent },
  { path: 'test/add/:id', component: TestEditComponent },
  { path: 'test/edit/:id', component: TestEditComponent }

];


@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
