import { LogoutComponent } from './components/logout/logout.component';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartjsModule } from 'ng-chartjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from 'api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TokenInterceptor } from './interceptor/tokenInterceptor';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { ProdDashboardComponent } from './components/prod-dashboard/prod-dashboard.component';
import { ConcessionComponent } from './components/concession/concession.component';
import { WellTestTableComponent } from './components/well-test-table/well-test-table.component';
import { RegistrationComponent } from './components/registration/registration.component';

import { ProductionBudgetComponent } from './components/production-budget/production-budget.component';
import { FluidLevelMeasurementsComponent } from './components/fluid-level-measurements/fluid-level-measurements.component';
import { WellComponent } from './components/well/well.component';
import { FieldComponent } from './components/field/field.component';
import { AppUpdateFieldComponent } from './components/field/app-update-field/app-update-field.component';
import { AppAddNewFieldComponent } from './components/field/app-add-new-field/app-add-new-field.component';
import { AppUpdateWellComponent } from './components/well/app-update-well/app-update-well.component';
import { AppAddNewWellComponent } from './components/well/app-add-new-well/app-add-new-well.component';
import { TestComponent } from './components/test/test.component';
import { TestEditComponent } from './components/test-edit/test-edit.component';
import { IntervalsInfoComponent } from './components/intervals-info/intervals-info.component';
import { WellGeneralInfoComponent } from './components/well-general-info/well-general-info.component';
import { MaterialModule } from './material/material.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WellTabsComponent } from './components/well-tabs/well-tabs.component';
import { ConfirmationComponent } from './components/general/confirmation/confirmation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './components/login/login.component';
import { AddNewFlmComponent } from './components/fluid-level-measurements/add-new-flm/add-new-flm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DrillingInfoComponent } from './components/drilling-info/drilling-info.component';
import { AddNewDrillinginfoComponent } from './components/drilling-info/add-new-drillinginfo/add-new-drillinginfo.component';
import { UpdateDrillingInfoComponent } from './components/drilling-info/update-drilling-info/update-drilling-info.component';
import { NewProductionbudgetComponent } from './components/production-budget/new-productionbudget/new-productionbudget.component';
import { UpdateProductionBudgetComponent } from './components/production-budget/update-production-budget/update-production-budget.component';
import { UpdateFlmComponent } from './components/fluid-level-measurements/update-flm/update-flm.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConcessionNavComponent } from './components/concession-nav/concession-nav.component';
import { FieldNavComponent } from './components/field-nav/field-nav.component';
import { ProductionGeneralInfoComponent } from './components/production-general-info/production-general-info.component';
import { AddNewPgiComponent } from './components/production-general-info/add-new-pgi/add-new-pgi.component';
import { UpdatePgiComponent } from './components/production-general-info/update-pgi/update-pgi.component';
import { WellGeneralInfoChartComponent } from './well-general-info-chart/well-general-info-chart.component';



import { JwtModule } from "@auth0/angular-jwt";
import { AddNewWellGeneralInfoComponent } from './components/well-general-info/add-new-well-general-info/add-new-well-general-info.component';
import { UpdateWellGeneralInfoComponent } from './components/well-general-info/update-well-general-info/update-well-general-info.component';
import { UpdateIntervalsInfoComponent } from './components/intervals-info/update-intervals-info/update-intervals-info.component';
import { AddNewIntervalsInfoComponent } from './components/intervals-info/add-new-intervals-info/add-new-intervals-info.component';
import { FlmLineChartComponent } from './components/fluid-level-measurements/flm-line-chart/flm-line-chart.component';
import { LabMeasurementComponent } from './components/lab-measurement/lab-measurement.component';
import { AddNewLabComponent } from './components/lab-measurement/add-new-lab/add-new-lab.component';
import { UpdateLabComponent } from './components/lab-measurement/update-lab/update-lab.component';
import { ChartS1DateComponent } from './components/chart-s1-date/chart-s1-date.component';
import { DailyActionsComponent } from './components/daily-actions/daily-actions.component';
import { AddNewReportComponent } from './components/daily-actions/add-new-report/add-new-report.component';
import { UpdateReportComponent } from './components/daily-actions/update-report/update-report.component';
import { DatePipe } from '@angular/common';
import { WellNavComponent } from './components/well-nav/well-nav.component';
import {BudgetActualComponent} from './components/budget-actual/budget-actual.component';
import {ConcessionAddComponent} from './dialogs/add/concession-add/concession-add.component';
import {ConcessionDeleteComponent} from './dialogs/delete/concession-delete/concession-delete.component';
import {ConcessionEditComponent} from './dialogs/edit/concession-edit/concession-edit.component';
import {WellTestAddComponent} from './dialogs/add/well-test-add/well-test-add.component';
import {WellTestEditComponent} from './dialogs/edit/well-test-edit/well-test-edit.component';
import {WellTestDeleteComponent} from './dialogs/delete/well-test-delete/well-test-delete.component';
import {BudgetActualDeleteComponent} from './dialogs/delete/budget-actual-delete/budget-actual-delete.component';
import {BudgetActualEditComponent} from './dialogs/edit/budget-actual-edit/budget-actual-edit.component';
import {BudgetActualAddComponent} from './dialogs/add/budget-actual-add/budget-actual-add.component';
import {BudgetActualChComponent} from './charts/budget-actual-ch/budget-actual-ch.component';
import { AdminAssignRolesComponent } from './components/admin-assign-roles/admin-assign-roles.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({

  declarations: [
    AppComponent,
    NavComponent,
    ProdDashboardComponent,
    ConcessionComponent,
    WellTestTableComponent,
    TestEditComponent,
    RegistrationComponent,
    ProductionBudgetComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    WellComponent,
    FieldComponent,
    AppUpdateFieldComponent,
    AppAddNewFieldComponent,
    AppUpdateWellComponent,
    AppAddNewWellComponent,
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
    BudgetActualAddComponent,
    BudgetActualChComponent,
    LoginComponent,
    AddNewFlmComponent,
    AddNewWellGeneralInfoComponent,
    UpdateWellGeneralInfoComponent,
    UpdateIntervalsInfoComponent,
    AddNewIntervalsInfoComponent,
    DrillingInfoComponent,
    AddNewDrillinginfoComponent,
    UpdateDrillingInfoComponent,
    NewProductionbudgetComponent,
    UpdateProductionBudgetComponent,
    UpdateFlmComponent,
    PageNotFoundComponent,
    ConcessionNavComponent,
    FieldNavComponent,
    ProductionGeneralInfoComponent,
    AddNewPgiComponent,
    UpdatePgiComponent,
    LogoutComponent,
    WellGeneralInfoChartComponent,
    FlmLineChartComponent,
    LabMeasurementComponent,
    AddNewLabComponent,
    UpdateLabComponent,
    ChartS1DateComponent,
    DailyActionsComponent,
    AddNewReportComponent,
    UpdateReportComponent,
    WellNavComponent,
    AdminAssignRolesComponent,
    HomeComponent
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
    MatSelectModule,
    NgChartjsModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    NgbModule,
    JwtModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxPaginationModule,
    NgChartjsModule,
    NgApexchartsModule

  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,

    },
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    },
    JwtHelperService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
