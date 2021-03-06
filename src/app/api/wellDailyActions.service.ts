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

import { AllWellDailyActions } from '../model/allWellDailyActions';
import { AllWellDailyActionsOfAWell } from '../model/allWellDailyActionsOfAWell';
import { ErrorDetails } from '../model/errorDetails';
import { WellDailyActionsRequest } from '../model/wellDailyActionsRequest';
import { WellDailyActionsResponse } from '../model/wellDailyActionsResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from 'service_utils/variables';
import { Configuration }                                     from 'service_utils/configuration';


@Injectable()
export class WellDailyActionsService {

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
     * Add a new daily report
     * Add a new daily report
     * @param body Daily Report object that needs to be added
     * @param wellId ID of dailyAction to return
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addDailyReport(body: WellDailyActionsRequest, wellId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public addDailyReport(body: WellDailyActionsRequest, wellId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public addDailyReport(body: WellDailyActionsRequest, wellId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public addDailyReport(body: WellDailyActionsRequest, wellId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addDailyReport.');
        }

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling addDailyReport.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/dailyActions`,
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
     * Deletes a report
     * Deletes a report by its id
     * @param wellId Delete a daily report in a well by its id
     * @param dailyActionId Delete a daily report by its id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteReportById(wellId: number, dailyActionId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteReportById(wellId: number, dailyActionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteReportById(wellId: number, dailyActionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteReportById(wellId: number, dailyActionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling deleteReportById.');
        }

        if (dailyActionId === null || dailyActionId === undefined) {
            throw new Error('Required parameter dailyActionId was null or undefined when calling deleteReportById.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/dailyActions/${encodeURIComponent(String(dailyActionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find reports between two dates
     * Returns reports between two dates
     * @param siLVL4 Return Reports
     * @param losses Return all daily Reports of a certain well by loss
     * @param downTime Return all daily Reports of a certain well by downTime
     * @param beginDate getting the daily actions that are of that date or after
     * @param endDate getting the daily actions that are of that date or after
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllReports(siLVL4?: number, losses?: number, downTime?: number, beginDate?: string, endDate?: string, observe?: 'body', reportProgress?: boolean): Observable<AllWellDailyActions>;
    public getAllReports(siLVL4?: number, losses?: number, downTime?: number, beginDate?: string, endDate?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AllWellDailyActions>>;
    public getAllReports(siLVL4?: number, losses?: number, downTime?: number, beginDate?: string, endDate?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AllWellDailyActions>>;
    public getAllReports(siLVL4?: number, losses?: number, downTime?: number, beginDate?: string, endDate?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (siLVL4 !== undefined && siLVL4 !== null) {
            queryParameters = queryParameters.set('siLVL4', <any>siLVL4);
        }
        if (losses !== undefined && losses !== null) {
            queryParameters = queryParameters.set('losses', <any>losses);
        }
        if (downTime !== undefined && downTime !== null) {
            queryParameters = queryParameters.set('downTime', <any>downTime);
        }
        if (beginDate !== undefined && beginDate !== null) {
            queryParameters = queryParameters.set('beginDate', <any>beginDate);
        }
        if (endDate !== undefined && endDate !== null) {
            queryParameters = queryParameters.set('endDate', <any>endDate);
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

        return this.httpClient.request<AllWellDailyActions>('get',`${this.basePath}/wells/dailyActions`,
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
     * Find reports between two dates
     * Returns reports between two dates
     * @param wellId ID of report to return
     * @param siLVL4 Return Reports
     * @param losses Return all daily Reports of a certain well by loss
     * @param downTime Return all daily Reports of a certain well by downTime
     * @param beginDate getting the daily actions that are of that date or after
     * @param endDate getting the daily actions that are of that date or after
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getReportById(wellId: number, siLVL4?: number, losses?: number, downTime?: number, beginDate?: string, endDate?: string, observe?: 'body', reportProgress?: boolean): Observable<AllWellDailyActionsOfAWell>;
    public getReportById(wellId: number, siLVL4?: number, losses?: number, downTime?: number, beginDate?: string, endDate?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AllWellDailyActionsOfAWell>>;
    public getReportById(wellId: number, siLVL4?: number, losses?: number, downTime?: number, beginDate?: string, endDate?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AllWellDailyActionsOfAWell>>;
    public getReportById(wellId: number, siLVL4?: number, losses?: number, downTime?: number, beginDate?: string, endDate?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling getReportById.');
        }






        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (siLVL4 !== undefined && siLVL4 !== null) {
            queryParameters = queryParameters.set('siLVL4', <any>siLVL4);
        }
        if (losses !== undefined && losses !== null) {
            queryParameters = queryParameters.set('losses', <any>losses);
        }
        if (downTime !== undefined && downTime !== null) {
            queryParameters = queryParameters.set('downTime', <any>downTime);
        }
        if (beginDate !== undefined && beginDate !== null) {
            queryParameters = queryParameters.set('beginDate', <any>beginDate);
        }
        if (endDate !== undefined && endDate !== null) {
            queryParameters = queryParameters.set('endDate', <any>endDate);
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

        return this.httpClient.request<AllWellDailyActionsOfAWell>('get',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/dailyActions`,
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
     * Find daily Reports of a well
     * Returns all daily Reports of a well by well id
     * @param wellId Return all daily Reports of a certain well
     * @param dailyActionId Return all daily Reports of a certain well
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getWellReportById(wellId: number, dailyActionId: number, observe?: 'body', reportProgress?: boolean): Observable<WellDailyActionsResponse>;
    public getWellReportById(wellId: number, dailyActionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WellDailyActionsResponse>>;
    public getWellReportById(wellId: number, dailyActionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WellDailyActionsResponse>>;
    public getWellReportById(wellId: number, dailyActionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling getWellReportById.');
        }

        if (dailyActionId === null || dailyActionId === undefined) {
            throw new Error('Required parameter dailyActionId was null or undefined when calling getWellReportById.');
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

        return this.httpClient.request<WellDailyActionsResponse>('get',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/dailyActions/${encodeURIComponent(String(dailyActionId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a daily report
     * Update an existing daily report for a well
     * @param body dailyReport object that needs to be updated
     * @param wellId well Id
     * @param dailyActionId record Id of the Daily Actions table
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateWellReport(body: WellDailyActionsRequest, wellId: number, dailyActionId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateWellReport(body: WellDailyActionsRequest, wellId: number, dailyActionId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateWellReport(body: WellDailyActionsRequest, wellId: number, dailyActionId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateWellReport(body: WellDailyActionsRequest, wellId: number, dailyActionId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateWellReport.');
        }

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling updateWellReport.');
        }

        if (dailyActionId === null || dailyActionId === undefined) {
            throw new Error('Required parameter dailyActionId was null or undefined when calling updateWellReport.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/dailyActions/${encodeURIComponent(String(dailyActionId))}`,
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
