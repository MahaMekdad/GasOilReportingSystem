import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductionBudgetComponent} from "./components/production-budget/production-budget.component";

const routes: Routes = [ {path: 'productionbudget', component: ProductionBudgetComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
