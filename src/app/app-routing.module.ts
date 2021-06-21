import {TestEditComponent} from './components/test-edit/test-edit.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

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

const routes: Routes = [
  {path: 'home', component: ProdDashboardComponent},
  {path: 'login', component: ProdDashboardComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'registration', component: ProdDashboardComponent},
  {path: 'concessions', component: ConcessionComponent},
  {path: 'well', component: WellTabsComponent},
  {path: 'wellGeneralInfo', component: WellGeneralInfoComponent},
  {path: 'intervalsInfo', component: IntervalsInfoComponent},
  {path: 'tests', component: WellTestTableComponent},
  {path: 'test', component: TestComponent},
  {path: 'test', component: TestComponent},
  {path: 'test/add/:id', component: TestEditComponent},
  {path: 'test/edit/:id', component: TestEditComponent},
  {path: 'flm', component: FluidLevelMeasurementsComponent},
  {path: 'flm', component: FluidLevelMeasurementsComponent},
  {path: 'productionbudget', component: ProductionBudgetComponent},
  {path: 'dashboard', component: ProdDashboardComponent}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
