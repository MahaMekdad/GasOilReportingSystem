import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from 'service_utils/configuration';
import { HttpClient } from '@angular/common/http';
import { ConcessionsService } from 'src/app/api/concessions.service';
import { ConcessionsBudgetsService } from 'src/app/api/concessionsBudgets.service';
import { DrilingInfoService } from 'src/app/api/drilingInfo.service';
import { FieldService } from 'src/app/api/field.service';
import { FluidLevelMeasurementsService } from 'src/app/api/fluidLevelMeasurements.service';
import { IntervalsInfoService } from 'src/app/api/intervalsInfo.service';
import { LabService } from 'src/app/api/lab.service';
import { LoginService } from 'src/app/api/login.service';
import { ProductionBudgetService } from 'src/app/api/productionBudget.service';
import { ProductionGeneralInfoService } from 'src/app/api/productionGeneralInfo.service';
import { UsersService } from 'src/app/api/users.service';
import { UsersRolesService } from 'src/app/api/usersRoles.service';
import { WellService } from 'src/app/api/well.service';
import { WellDailyActionsService } from 'src/app/api/wellDailyActions.service';
import { WellGeneralInfoService } from 'src/app/api/wellGeneralInfo.service';
import { WellTestsService } from 'src/app/api/wellTests.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    ConcessionsService,
    ConcessionsBudgetsService,
    DrilingInfoService,
    FieldService,
    FluidLevelMeasurementsService,
    IntervalsInfoService,
    LabService,
    LoginService,
    ProductionBudgetService,
    ProductionGeneralInfoService,
    UsersService,
    UsersRolesService,
    WellService,
    WellDailyActionsService,
    WellGeneralInfoService,
    WellTestsService ]
})
export class ApiModule {
    // public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
    //     return {
    //         ngModule: ApiModule,
    //         providers: [ { provide: Configuration, useFactory: configurationFactory } ]
    //     };
    // }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
