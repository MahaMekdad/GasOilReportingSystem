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

import { FluidLevelMeasurementRequest } from '../model/fluidLevelMeasurementRequest';
import { GetAllFluidLevelMeasurement } from '../model/getAllFluidLevelMeasurement';
import { GetFluidLevelMeasurement } from '../model/getFluidLevelMeasurement';

import { BASE_PATH, COLLECTION_FORMATS }                     from 'service_utils/variables';
import { Configuration }                                     from 'service_utils/configuration';


@Injectable()
export class FluidLevelMeasurementsService {

    protected basePath = 'http://localhost:8888';
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
     * getting the fluid level measurements for a specific well id
     * @param beginDate getting the fluid level measurements records that are of that date or after
     * @param endDate getting the fluid level measurements records that are of that date or before
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsFluidLevelMeasurementsGet(beginDate?: Date, endDate?: Date, observe?: 'body', reportProgress?: boolean): Observable<GetAllFluidLevelMeasurement>;
    public wellsFluidLevelMeasurementsGet(beginDate?: Date, endDate?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetAllFluidLevelMeasurement>>;
    public wellsFluidLevelMeasurementsGet(beginDate?: Date, endDate?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetAllFluidLevelMeasurement>>;
    public wellsFluidLevelMeasurementsGet(beginDate?: Date, endDate?: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (beginDate !== undefined && beginDate !== null) {
            queryParameters = queryParameters.set('beginDate', <any>beginDate.toISOString());
        }
        if (endDate !== undefined && endDate !== null) {
            queryParameters = queryParameters.set('endDate', <any>endDate.toISOString());
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

        return this.httpClient.request<GetAllFluidLevelMeasurement>('get',`${this.basePath}/wells/fluidLevelMeasurements`,
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
     * deleting a specific fluid level measurements record that is related to the well with the given id
     * @param wellId the ID of the well
     * @param flmId the ID of the fluid level measurement record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdFluidLevelMeasurementsFlmIdDelete(wellId: number, flmId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdFluidLevelMeasurementsFlmIdDelete(wellId: number, flmId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdFluidLevelMeasurementsFlmIdDelete(wellId: number, flmId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdFluidLevelMeasurementsFlmIdDelete(wellId: number, flmId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdFluidLevelMeasurementsFlmIdDelete.');
        }

        if (flmId === null || flmId === undefined) {
            throw new Error('Required parameter flmId was null or undefined when calling wellsWellIdFluidLevelMeasurementsFlmIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/fluidLevelMeasurements/${encodeURIComponent(String(flmId))}`,
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
     * updating a fluid level measurement of a specific well
     * @param body
     * @param wellId the ID of the well
     * @param flmId the ID of the fluid level measurement record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdFluidLevelMeasurementsFlmIdPatch(body: FluidLevelMeasurementRequest, wellId: number, flmId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdFluidLevelMeasurementsFlmIdPatch(body: FluidLevelMeasurementRequest, wellId: number, flmId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdFluidLevelMeasurementsFlmIdPatch(body: FluidLevelMeasurementRequest, wellId: number, flmId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdFluidLevelMeasurementsFlmIdPatch(body: FluidLevelMeasurementRequest, wellId: number, flmId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling wellsWellIdFluidLevelMeasurementsFlmIdPatch.');
        }

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdFluidLevelMeasurementsFlmIdPatch.');
        }

        if (flmId === null || flmId === undefined) {
            throw new Error('Required parameter flmId was null or undefined when calling wellsWellIdFluidLevelMeasurementsFlmIdPatch.');
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

        return this.httpClient.request<any>('patch',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/fluidLevelMeasurements/${encodeURIComponent(String(flmId))}`,
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
     * updating a fluid level measurement of a specific well
     * @param body
     * @param wellId the ID of the well
     * @param flmId the ID of the fluid level measurement record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdFluidLevelMeasurementsFlmIdPut(body: FluidLevelMeasurementRequest, wellId: number, flmId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdFluidLevelMeasurementsFlmIdPut(body: FluidLevelMeasurementRequest, wellId: number, flmId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdFluidLevelMeasurementsFlmIdPut(body: FluidLevelMeasurementRequest, wellId: number, flmId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdFluidLevelMeasurementsFlmIdPut(body: FluidLevelMeasurementRequest, wellId: number, flmId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling wellsWellIdFluidLevelMeasurementsFlmIdPut.');
        }

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdFluidLevelMeasurementsFlmIdPut.');
        }

        if (flmId === null || flmId === undefined) {
            throw new Error('Required parameter flmId was null or undefined when calling wellsWellIdFluidLevelMeasurementsFlmIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/fluidLevelMeasurements/${encodeURIComponent(String(flmId))}`,
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
     * getting the fluid level measurements for a specific well id
     * @param wellId the ID of the well
     * @param beginDate getting the fluid level measurements records that are of that date or after
     * @param endDate getting the fluid level measurements records that are of that date or before
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdFluidLevelMeasurementsGet(wellId: number, beginDate?: Date, endDate?: Date, observe?: 'body', reportProgress?: boolean): Observable<GetFluidLevelMeasurement>;
    public wellsWellIdFluidLevelMeasurementsGet(wellId: number, beginDate?: Date, endDate?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<GetFluidLevelMeasurement>>;
    public wellsWellIdFluidLevelMeasurementsGet(wellId: number, beginDate?: Date, endDate?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<GetFluidLevelMeasurement>>;
    public wellsWellIdFluidLevelMeasurementsGet(wellId: number, beginDate?: Date, endDate?: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdFluidLevelMeasurementsGet.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (beginDate !== undefined && beginDate !== null) {
            queryParameters = queryParameters.set('beginDate', <any>beginDate.toISOString());
        }
        if (endDate !== undefined && endDate !== null) {
            queryParameters = queryParameters.set('endDate', <any>endDate.toISOString());
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

        return this.httpClient.request<GetFluidLevelMeasurement>('get',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/fluidLevelMeasurements`,
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
     * adding a new fluid level measurement for a specific well
     * @param body
     * @param wellId the ID of the well
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdFluidLevelMeasurementsPost(body: FluidLevelMeasurementRequest, wellId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdFluidLevelMeasurementsPost(body: FluidLevelMeasurementRequest, wellId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdFluidLevelMeasurementsPost(body: FluidLevelMeasurementRequest, wellId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdFluidLevelMeasurementsPost(body: FluidLevelMeasurementRequest, wellId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling wellsWellIdFluidLevelMeasurementsPost.');
        }

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdFluidLevelMeasurementsPost.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/fluidLevelMeasurements`,
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
