import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluidLevelMeasurementsComponent } from './components/fluid-level-measurements/fluid-level-measurements.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: 'flm',
    component:FluidLevelMeasurementsComponent
  },
  {
    path: 'test',
    component:TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
