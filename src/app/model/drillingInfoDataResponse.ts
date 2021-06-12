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

export interface DrillingInfoDataResponse { 
    id?: number;
    releaseDate?: Date;
    wellDescription?: string;
    wellType?: string;
    boreType?: string;
    measuredDepth?: number;
    tvdDepth?: number;
    bbtp?: number;
    productionGeneralInfo?: string;
    wellId?: number;
}