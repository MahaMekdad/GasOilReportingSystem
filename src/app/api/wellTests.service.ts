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

import { AllTests } from '../model/allTests';
import { ErrorDetails } from '../model/errorDetails';
import { WellTestRequest } from '../model/wellTestRequest';
import { WellTestResponse } from '../model/wellTestResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from 'service_utils/variables';
import { Configuration }                                     from 'service_utils/configuration';


@Injectable()
export class WellTestsService {

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
     * Add a new test record to the database for specific well
     *
     * @param body test roew object that needs to be added to the database
     * @param id ID of the well of which we need to add the tests records
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addTestRecord(body: WellTestRequest, id: number, observe?: 'body', reportProgress?: boolean): Observable<WellTestResponse>;
    public addTestRecord(body: WellTestRequest, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WellTestResponse>>;
    public addTestRecord(body: WellTestRequest, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WellTestResponse>>;
    public addTestRecord(body: WellTestRequest, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addTestRecord.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling addTestRecord.');
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

        return this.httpClient.request<WellTestResponse>('post',`${this.basePath}/wells/${encodeURIComponent(String(id))}/tests`,
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
     * Delete test record  by ID
     * For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors
     * @param recordId ID of the well of which we need to update the record.
     * @param id ID of the well test record that needs to be deleted
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteTest(recordId: number, id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteTest(recordId: number, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteTest(recordId: number, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteTest(recordId: number, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (recordId === null || recordId === undefined) {
            throw new Error('Required parameter recordId was null or undefined when calling deleteTest.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteTest.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/wells/${encodeURIComponent(String(id))}/tests/${encodeURIComponent(String(recordId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return a list of all available well test records for all wells.
     * returning a list of available test records
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllTests(observe?: 'body', reportProgress?: boolean): Observable<AllTests>;
    public findAllTests(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AllTests>>;
    public findAllTests(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AllTests>>;
    public findAllTests(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<AllTests>('get',`${this.basePath}/wells/tests`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Find a list of  well Test records for specific well Id.
     * Returing a list of all avilable well test records based on a given well id, For valid response try integer IDs with value &gt;&#x3D; 1 and &lt;&#x3D; 1000
     * @param id ID of the well of which we need to retreive the tests records
     * @param beginDate getting the test  measurements records that are of that date or after
     * @param endDate getting the test  measurements records that are of that date or before
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getTestById(id: number, beginDate?: Date, endDate?: Date, observe?: 'body', reportProgress?: boolean): Observable<AllTests>;
    public getTestById(id: number, beginDate?: Date, endDate?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<AllTests>>;
    public getTestById(id: number, beginDate?: Date, endDate?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<AllTests>>;
    public getTestById(id: number, beginDate?: Date, endDate?: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTestById.');
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

        return this.httpClient.request<AllTests>('get',`${this.basePath}/wells/${encodeURIComponent(String(id))}/tests`,
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
     * Update an existing test record based on a given Id
     *
     * @param body well test row object that needs to be added to the database
     * @param id ID of the well of which we need to update the record.
     * @param recordId ID of the well test record that needs to be deleted
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateWellTestRecord(body: WellTestRequest, id: number, recordId: number, observe?: 'body', reportProgress?: boolean): Observable<WellTestResponse>;
    public updateWellTestRecord(body: WellTestRequest, id: number, recordId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<WellTestResponse>>;
    public updateWellTestRecord(body: WellTestRequest, id: number, recordId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<WellTestResponse>>;
    public updateWellTestRecord(body: WellTestRequest, id: number, recordId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateWellTestRecord.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateWellTestRecord.');
        }

        if (recordId === null || recordId === undefined) {
            throw new Error('Required parameter recordId was null or undefined when calling updateWellTestRecord.');
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

        return this.httpClient.request<WellTestResponse>('put',`${this.basePath}/wells/${encodeURIComponent(String(id))}/tests/${encodeURIComponent(String(recordId))}`,
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
