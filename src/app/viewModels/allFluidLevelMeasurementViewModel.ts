import { AllFluidLevelMeasurementResponse } from '../model/allFluidLevelMeasurementResponse';


 export class AllFluidLevelMeasurementViewModel { 
    id?: number;
    wellId?: number;
    date?: Date;
    intervals?: string;
    flType?: AllFluidLevelMeasurementResponse.FlTypeEnum;
    fluidLevel?: number;
    pumpDepth?: number;
    liqPercentage?: number;
    pumpFillage?: number;
    pumpSubmerge?: number;
    card?: AllFluidLevelMeasurementResponse.CardEnum;
    remarks?: string;
    selected?: boolean
}