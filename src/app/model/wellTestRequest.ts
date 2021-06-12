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
import { ChockTypeEnum } from './chockTypeEnum';

export interface WellTestRequest { 
    /**
     * the date in which the test was measured
     */
    productionDate?: Date;
    /**
     * a value between 0-24 representing the test duration
     */
    tDuration?: string;
    /**
     * representign the gross production of the well
     */
    gross?: number;
    /**
     * representing the net production for the well
     */
    net?: number;
    /**
     * representing the watercut percentage in the production
     */
    waterCut?: number;
    /**
     * representing the Gas oil ration in th stream for the well in SCF/BBL
     */
    gor?: number;
    /**
     * representing the gas rate in the production stream in SCF
     */
    gasRate?: number;
    /**
     * representing the condensate rate in the production stream
     */
    condensateRate?: number;
    /**
     * representing the well head pressure for the well in PSI
     */
    whp?: number;
    /**
     * representing the well head temperature for the well in degree-f
     */
    wht?: number;
    /**
     * representing the upstream pressure for the well psi
     */
    usp?: number;
    /**
     * representing the upstream temperature for the well f
     */
    ust?: number;
    /**
     * representing the separator pressure for the well in psi
     */
    sp?: number;
    /**
     * representing the separator temperature for the well in degree-f
     */
    st?: number;
    /**
     * representing the flow line pressure for the well psi
     */
    flp?: number;
    /**
     * representing the flow line temperature for the well in *f 
     */
    flt?: number;
    chockType?: ChockTypeEnum;
    /**
     * the chock size at which the the test was performed
     */
    chockSize?: number;
    /**
     * representing the h2s ppm in the well flow
     */
    h2s?: number;
    /**
     * representing the co2 in the well stream
     */
    co2?: number;
    /**
     * the test unit which performed the test
     */
    unit?: string;
    /**
     * Any notes reported or added during the test or recommendaton for the well
     */
    remarks?: string;
}