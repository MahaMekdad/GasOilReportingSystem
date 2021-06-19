import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import {ProductionBudgetComponent} from './components/production-budget/production-budget.component';
import { FluidLevelMeasurementsComponent } from './components/fluid-level-measurements/fluid-level-measurements.component';
import { TestComponent } from './components/test/test.component';
import { IntervalsInfoComponent } from './components/intervals-info/intervals-info.component';

const routes: Routes = [
  {
    path: 'flm',
    component: FluidLevelMeasurementsComponent
  },
  {
    path: 'test',
    component: TestComponent
  },
  {path: 'productionbudget', component: ProductionBudgetComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'intervalsInfo',component: IntervalsInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
