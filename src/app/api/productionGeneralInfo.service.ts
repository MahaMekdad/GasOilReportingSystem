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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from 'service_utils/encoder';

import { Observable }                                        from 'rxjs';

import { ErrorDetails } from '../model/errorDetails';
import { GetAllProductionGeneralInfoWithNames } from '../model/getAllProductionGeneralInfoWithNames';
import { GetProductionGeneralInfo } from '../model/getProductionGeneralInfo';
import { ProductionGeneralInfoRequest } from '../model/productionGeneralInfoRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from 'service_utils/variables';
import { Configuration }                                     from 'service_utils/configuration';


@Injectable()
export class ProductionGeneralInfoService {

    protected basePath = 'http://localhost:8000';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     *
     * getting all the production general info for all the wells
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsProductionGeneralInfoGet(observe?: 'body', reportProgress?: boolean): Observable<GetAllProductionGeneralInfoWithNames>;
    public wellsProductionGeneralInfoGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllProductionGeneralInfoWithNames>>;
    public wellsProductionGeneralInfoGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllProductionGeneralInfoWithNames>>;
    public wellsProductionGeneralInfoGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<GetAllProductionGeneralInfoWithNames>('get',`${this.basePath}/wells/productionGeneralInfo`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * getting all the production general info for the well with the given id
     * @param wellId the ID of the well
     * @param powerSourceType the value of the powerSourceType
     * @param processionPlant the value of the processionPlant
     * @param currentWellType the value of the currentWellType
     * @param currentLiftType the value of the currentLiftType
     * @param currentStatus the value of the currentStatus
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdProductionGeneralInfoGet(wellId: number, powerSourceType?: string, processionPlant?: string, currentWellType?: string, currentLiftType?: string, currentStatus?: string, observe?: 'body', reportProgress?: boolean): Observable<GetProductionGeneralInfo>;
    public wellsWellIdProductionGeneralInfoGet(wellId: number, powerSourceType?: string, processionPlant?: string, currentWellType?: string, currentLiftType?: string, currentStatus?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetProductionGeneralInfo>>;
    public wellsWellIdProductionGeneralInfoGet(wellId: number, powerSourceType?: string, processionPlant?: string, currentWellType?: string, currentLiftType?: string, currentStatus?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetProductionGeneralInfo>>;
    public wellsWellIdProductionGeneralInfoGet(wellId: number, powerSourceType?: string, processionPlant?: string, currentWellType?: string, currentLiftType?: string, currentStatus?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdProductionGeneralInfoGet.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (powerSourceType !== undefined && powerSourceType !== null) {
            queryParameters = queryParameters.set('powerSourceType', <any>powerSourceType);
        }
        if (processionPlant !== undefined && processionPlant !== null) {
            queryParameters = queryParameters.set('processionPlant', <any>processionPlant);
        }
        if (currentWellType !== undefined && currentWellType !== null) {
            queryParameters = queryParameters.set('currentWellType', <any>currentWellType);
        }
        if (currentLiftType !== undefined && currentLiftType !== null) {
            queryParameters = queryParameters.set('currentLiftType', <any>currentLiftType);
        }
        if (currentStatus !== undefined && currentStatus !== null) {
            queryParameters = queryParameters.set('currentStatus', <any>currentStatus);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<GetProductionGeneralInfo>('get',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/productionGeneralInfo`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * deleting a specific production general info record that is related to the well with the given id
     * @param wellId the ID of the well
     * @param pgiId the ID of the production general info record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdProductionGeneralInfoPgiIdDelete(wellId: number, pgiId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdProductionGeneralInfoPgiIdDelete(wellId: number, pgiId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdProductionGeneralInfoPgiIdDelete(wellId: number, pgiId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdProductionGeneralInfoPgiIdDelete(wellId: number, pgiId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdProductionGeneralInfoPgiIdDelete.');
        }

        if (pgiId === null || pgiId === undefined) {
            throw new Error('Required parameter pgiId was null or undefined when calling wellsWellIdProductionGeneralInfoPgiIdDelete.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/productionGeneralInfo/${encodeURIComponent(String(pgiId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * updating production general info of a specific well
     * @param body
     * @param wellId the ID of the well
     * @param pgiId the ID of the production general info record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdProductionGeneralInfoPgiIdPut(body: ProductionGeneralInfoRequest, wellId: number, pgiId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdProductionGeneralInfoPgiIdPut(body: ProductionGeneralInfoRequest, wellId: number, pgiId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdProductionGeneralInfoPgiIdPut(body: ProductionGeneralInfoRequest, wellId: number, pgiId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdProductionGeneralInfoPgiIdPut(body: ProductionGeneralInfoRequest, wellId: number, pgiId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling wellsWellIdProductionGeneralInfoPgiIdPut.');
        }

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdProductionGeneralInfoPgiIdPut.');
        }

        if (pgiId === null || pgiId === undefined) {
            throw new Error('Required parameter pgiId was null or undefined when calling wellsWellIdProductionGeneralInfoPgiIdPut.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/productionGeneralInfo/${encodeURIComponent(String(pgiId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     *
     * creating a new production general info record for a specific well
     * @param body
     * @param wellId the ID of the well
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdProductionGeneralInfoPost(body: ProductionGeneralInfoRequest, wellId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdProductionGeneralInfoPost(body: ProductionGeneralInfoRequest, wellId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdProductionGeneralInfoPost(body: ProductionGeneralInfoRequest, wellId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdProductionGeneralInfoPost(body: ProductionGeneralInfoRequest, wellId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling wellsWellIdProductionGeneralInfoPost.');
        }

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdProductionGeneralInfoPost.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/productionGeneralInfo`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
