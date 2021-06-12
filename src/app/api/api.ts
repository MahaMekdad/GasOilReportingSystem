export * from './concessions.service';
import { ConcessionsService } from './concessions.service';
export * from './concessionsBudgets.service';
import { ConcessionsBudgetsService } from './concessionsBudgets.service';
export * from './drilingInfo.service';
import { DrilingInfoService } from './drilingInfo.service';
export * from './field.service';
import { FieldService } from './field.service';
export * from './fluidLevelMeasurements.service';
import { FluidLevelMeasurementsService } from './fluidLevelMeasurements.service';
export * from './intervalsInfo.service';
import { IntervalsInfoService } from './intervalsInfo.service';
export * from './lab.service';
import { LabService } from './lab.service';
export * from './productionBudget.service';
import { ProductionBudgetService } from './productionBudget.service';
export * from './productionGeneralInfo.service';
import { ProductionGeneralInfoService } from './productionGeneralInfo.service';
export * from './users.service';
import { UsersService } from './users.service';
export * from './usersRoles.service';
import { UsersRolesService } from './usersRoles.service';
export * from './well.service';
import { WellService } from './well.service';
export * from './wellDailyActions.service';
import { WellDailyActionsService } from './wellDailyActions.service';
export * from './wellGeneralInfo.service';
import { WellGeneralInfoService } from './wellGeneralInfo.service';
export * from './wellTests.service';
import { WellTestsService } from './wellTests.service';
export const APIS = [ConcessionsService, ConcessionsBudgetsService, DrilingInfoService, FieldService, FluidLevelMeasurementsService, IntervalsInfoService, LabService, ProductionBudgetService, ProductionGeneralInfoService, UsersService, UsersRolesService, WellService, WellDailyActionsService, WellGeneralInfoService, WellTestsService];
