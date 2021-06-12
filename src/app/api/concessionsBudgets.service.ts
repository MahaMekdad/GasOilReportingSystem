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
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { FieldsBudgetAndActualRequest } from '../model/fieldsBudgetAndActualRequest';
import { FieldsBudgetAndActualResponse } from '../model/fieldsBudgetAndActualResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ConcessionsBudgetsService {

    protected basePath = 'http://www.ourcompany.com/v1';
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
     * Add a new record to the dataBase
     * 
     * @param body budget object that needs to be added to the database
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addBudgetRecord(body: FieldsBudgetAndActualRequest, observe?: 'body', reportProgress?: boolean): Observable<FieldsBudgetAndActualResponse>;
    public addBudgetRecord(body: FieldsBudgetAndActualRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FieldsBudgetAndActualResponse>>;
    public addBudgetRecord(body: FieldsBudgetAndActualRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FieldsBudgetAndActualResponse>>;
    public addBudgetRecord(body: FieldsBudgetAndActualRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addBudgetRecord.');
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

        return this.httpClient.request<FieldsBudgetAndActualResponse>('post',`${this.basePath}/concessions/budgets/budgetVsActual`,
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
     * get all concessions Budgets
     * returning a list of available Concessions Budgets
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllRecords(observe?: 'body', reportProgress?: boolean): Observable<Array<FieldsBudgetAndActualResponse>>;
    public findAllRecords(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<FieldsBudgetAndActualResponse>>>;
    public findAllRecords(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<FieldsBudgetAndActualResponse>>>;
    public findAllRecords(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<FieldsBudgetAndActualResponse>>('get',`${this.basePath}/concessions/budgets/budgetVsActual`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update an existing fieldsBudgetAndActual
     * 
     * @param id ID of record to be updated to be returned
     * @param body fieldsBudgetAndActual object that needs to be added to the database
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateBudgetRecord(id: number, body?: FieldsBudgetAndActualRequest, observe?: 'body', reportProgress?: boolean): Observable<FieldsBudgetAndActualResponse>;
    public updateBudgetRecord(id: number, body?: FieldsBudgetAndActualRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FieldsBudgetAndActualResponse>>;
    public updateBudgetRecord(id: number, body?: FieldsBudgetAndActualRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FieldsBudgetAndActualResponse>>;
    public updateBudgetRecord(id: number, body?: FieldsBudgetAndActualRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateBudgetRecord.');
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

        return this.httpClient.request<FieldsBudgetAndActualResponse>('put',`${this.basePath}/concessions/budgets/budgetVsActual/${encodeURIComponent(String(id))}`,
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
