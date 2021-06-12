/**
 * Oil and Gas Reporting System (OGRS-API)
 * This is an api  to allows users to obtain infomation about the oil and gas wells database and generating a punch of related reposts such as wells count, insurance as well as production allocation funcationality
 *
 * OpenAPI spec version: 3.0
 * Contact: mohamed.wafa770@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Model for the ProductionGeneralInfo object info for returns with additional columns(get requests)
 */
export interface AllProductionGeneralInfoWithNamesResponse { 
    id?: number;
    wellId?: number;
    wellName?: string;
    fieldName?: string;
    concessionName?: string;
    initialProdDate?: Date;
    initialType?: AllProductionGeneralInfoWithNamesResponse.InitialTypeEnum;
    initialProduct?: AllProductionGeneralInfoWithNamesResponse.InitialProductEnum;
    initialLiftType?: AllProductionGeneralInfoWithNamesResponse.InitialLiftTypeEnum;
    initStatus?: AllProductionGeneralInfoWithNamesResponse.InitStatusEnum;
    monitoringSystem?: AllProductionGeneralInfoWithNamesResponse.MonitoringSystemEnum;
    currentWellType?: AllProductionGeneralInfoWithNamesResponse.CurrentWellTypeEnum;
    currentWellTypeDate?: Date;
    currentProduct?: AllProductionGeneralInfoWithNamesResponse.CurrentProductEnum;
    currentStatus?: AllProductionGeneralInfoWithNamesResponse.CurrentStatusEnum;
    runtime?: number;
    currentLiftType?: AllProductionGeneralInfoWithNamesResponse.CurrentLiftTypeEnum;
    currentLiftTypeDate?: Date;
    powerSourceType?: AllProductionGeneralInfoWithNamesResponse.PowerSourceTypeEnum;
    powerSource?: string;
    processionPlant?: AllProductionGeneralInfoWithNamesResponse.ProcessionPlantEnum;
}
export namespace AllProductionGeneralInfoWithNamesResponse {
    export type InitialTypeEnum = 'oil producer' | 'gas producer' | 'water producer' | 'oil  and gas' | 'condensate producer' | 'non';
    export const InitialTypeEnum = {
        OilProducer: 'oil producer' as InitialTypeEnum,
        GasProducer: 'gas producer' as InitialTypeEnum,
        WaterProducer: 'water producer' as InitialTypeEnum,
        OilAndGas: 'oil  and gas' as InitialTypeEnum,
        CondensateProducer: 'condensate producer' as InitialTypeEnum,
        Non: 'non' as InitialTypeEnum
    };
    export type InitialProductEnum = 'oil' | 'water' | 'gas' | 'condensate' | 'non condensate';
    export const InitialProductEnum = {
        Oil: 'oil' as InitialProductEnum,
        Water: 'water' as InitialProductEnum,
        Gas: 'gas' as InitialProductEnum,
        Condensate: 'condensate' as InitialProductEnum,
        NonCondensate: 'non condensate' as InitialProductEnum
    };
    export type InitialLiftTypeEnum = 'NaturalFlow' | 'S/R' | 'ESP' | 'Gl' | 'PCP' | 'PlungerLift' | 'ESP-PCP';
    export const InitialLiftTypeEnum = {
        NaturalFlow: 'NaturalFlow' as InitialLiftTypeEnum,
        SR: 'S/R' as InitialLiftTypeEnum,
        ESP: 'ESP' as InitialLiftTypeEnum,
        Gl: 'Gl' as InitialLiftTypeEnum,
        PCP: 'PCP' as InitialLiftTypeEnum,
        PlungerLift: 'PlungerLift' as InitialLiftTypeEnum,
        ESPPCP: 'ESP-PCP' as InitialLiftTypeEnum
    };
    export type InitStatusEnum = 'producing' | 'dry';
    export const InitStatusEnum = {
        Producing: 'producing' as InitStatusEnum,
        Dry: 'dry' as InitStatusEnum
    };
    export type MonitoringSystemEnum = 'skada' | 'non';
    export const MonitoringSystemEnum = {
        Skada: 'skada' as MonitoringSystemEnum,
        Non: 'non' as MonitoringSystemEnum
    };
    export type CurrentWellTypeEnum = 'oil producer' | 'gas producer' | 'water producer' | 'oil  and gas' | 'condensate producer' | 'non';
    export const CurrentWellTypeEnum = {
        OilProducer: 'oil producer' as CurrentWellTypeEnum,
        GasProducer: 'gas producer' as CurrentWellTypeEnum,
        WaterProducer: 'water producer' as CurrentWellTypeEnum,
        OilAndGas: 'oil  and gas' as CurrentWellTypeEnum,
        CondensateProducer: 'condensate producer' as CurrentWellTypeEnum,
        Non: 'non' as CurrentWellTypeEnum
    };
    export type CurrentProductEnum = 'oil' | 'water' | 'gas' | 'condensate' | 'non condensate';
    export const CurrentProductEnum = {
        Oil: 'oil' as CurrentProductEnum,
        Water: 'water' as CurrentProductEnum,
        Gas: 'gas' as CurrentProductEnum,
        Condensate: 'condensate' as CurrentProductEnum,
        NonCondensate: 'non condensate' as CurrentProductEnum
    };
    export type CurrentStatusEnum = 'producing' | 'shutin';
    export const CurrentStatusEnum = {
        Producing: 'producing' as CurrentStatusEnum,
        Shutin: 'shutin' as CurrentStatusEnum
    };
    export type CurrentLiftTypeEnum = 'NaturalFlow' | 'S/R' | 'ESP' | 'Gl' | 'PCP' | 'PlungerLift' | 'ESP-PCP';
    export const CurrentLiftTypeEnum = {
        NaturalFlow: 'NaturalFlow' as CurrentLiftTypeEnum,
        SR: 'S/R' as CurrentLiftTypeEnum,
        ESP: 'ESP' as CurrentLiftTypeEnum,
        Gl: 'Gl' as CurrentLiftTypeEnum,
        PCP: 'PCP' as CurrentLiftTypeEnum,
        PlungerLift: 'PlungerLift' as CurrentLiftTypeEnum,
        ESPPCP: 'ESP-PCP' as CurrentLiftTypeEnum
    };
    export type PowerSourceTypeEnum = 'OHL' | 'Diesel Generator';
    export const PowerSourceTypeEnum = {
        OHL: 'OHL' as PowerSourceTypeEnum,
        DieselGenerator: 'Diesel Generator' as PowerSourceTypeEnum
    };
    export type ProcessionPlantEnum = 'Gas Plant' | 'Oil Plant' | 'Flair';
    export const ProcessionPlantEnum = {
        GasPlant: 'Gas Plant' as ProcessionPlantEnum,
        OilPlant: 'Oil Plant' as ProcessionPlantEnum,
        Flair: 'Flair' as ProcessionPlantEnum
    };
}