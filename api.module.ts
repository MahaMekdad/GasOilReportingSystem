import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ConcessionsService } from './api/concessions.service';
import { ConcessionsBudgetsService } from './api/concessionsBudgets.service';
import { DrilingInfoService } from './api/drilingInfo.service';
import { FieldService } from './api/field.service';
import { FluidLevelMeasurementsService } from './api/fluidLevelMeasurements.service';
import { IntervalsInfoService } from './api/intervalsInfo.service';
import { LabService } from './api/lab.service';
import { ProductionBudgetService } from './api/productionBudget.service';
import { ProductionGeneralInfoService } from './api/productionGeneralInfo.service';
import { UsersService } from './api/users.service';
import { UsersRolesService } from './api/usersRoles.service';
import { WellService } from './api/well.service';
import { WellDailyActionsService } from './api/wellDailyActions.service';
import { WellGeneralInfoService } from './api/wellGeneralInfo.service';
import { WellTestsService } from './api/wellTests.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ConcessionsService,
    ConcessionsBudgetsService,
    DrilingInfoService,
    FieldService,
    FluidLevelMeasurementsService,
    IntervalsInfoService,
    LabService,
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
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

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
