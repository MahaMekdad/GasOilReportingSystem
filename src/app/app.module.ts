import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ApiModule} from 'api.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavComponent} from './components/nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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


import {ProdDashboardComponent} from './components/prod-dashboard/prod-dashboard.component';
import {ConcessionComponent} from './components/concession/concession.component';
import {WellTestTableComponent} from './components/well-test-table/well-test-table.component';
import {RegistrationComponent} from './components/registration/registration.component';

import {ProductionBudgetComponent} from './components/production-budget/production-budget.component';
import {FluidLevelMeasurementsComponent} from './components/fluid-level-measurements/fluid-level-measurements.component';
import {TestComponent} from './components/test/test.component';
import {TestEditComponent} from './components/test-edit/test-edit.component';
import {IntervalsInfoComponent} from './components/intervals-info/intervals-info.component';
import {WellGeneralInfoComponent} from './components/well-general-info/well-general-info.component';
import {MaterialModule} from './material/material.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import {WellTabsComponent} from './components/well-tabs/well-tabs.component';
import { ConfirmationComponent } from './components/general/confirmation/confirmation.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './components/login/login.component';
import { AddNewFlmComponent } from './components/add-new-flm/add-new-flm.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateFlmComponent } from './components/update-flm/update-flm.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ConcessionNavComponent } from './components/concession-nav/concession-nav.component';
import { FieldNavComponent } from './components/field-nav/field-nav.component';
import { ProductionGeneralInfoComponent } from './components/production-general-info/production-general-info.component';
import { AddNewPgiComponent } from './components/add-new-pgi/add-new-pgi.component';
import { UpdatePgiComponent } from './components/update-pgi/update-pgi.component';


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
    WellTabsComponent,
    ConfirmationComponent,
    LoginComponent,
    AddNewFlmComponent,
    UpdateFlmComponent,
    PageNotFoundComponent,
    ConcessionNavComponent,
    FieldNavComponent,
    ProductionGeneralInfoComponent,
    AddNewPgiComponent,
    UpdatePgiComponent
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
export class AppModule {
}
