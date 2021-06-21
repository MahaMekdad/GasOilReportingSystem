import { TokenInterceptor } from './interceptor/tokenInterceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from 'api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { TestComponent } from './components/test/test.component';
import { TestEditComponent } from './components/test-edit/test-edit.component';
import { IntervalsInfoComponent } from './components/intervals-info/intervals-info.component';
import { WellGeneralInfoComponent } from './components/well-general-info/well-general-info.component';
import { LoginComponent } from './components/login/login.component';
import { AddNewFlmComponent } from './components/add-new-flm/add-new-flm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateFlmComponent } from './components/update-flm/update-flm.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';


@NgModule({

  declarations: [
    AppComponent,
    ProductionBudgetComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    NavComponent,
    ProdDashboardComponent,
    ConcessionComponent,
    WellTestTableComponent,
    TestEditComponent,
    RegistrationComponent,
    ProductionBudgetComponent,
    FluidLevelMeasurementsComponent,
    TestComponent,
    IntervalsInfoComponent,
    WellGeneralInfoComponent,
    LoginComponent,
    AddNewFlmComponent,
    UpdateFlmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
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
  bootstrap: [AppComponent]
})
export class AppModule { }
