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
import { IntervalsInfoRequest } from '../model/intervalsInfoRequest';
import { IntervalsInfoResponse } from '../model/intervalsInfoResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from 'service_utils/variables';
import { Configuration }                                     from 'service_utils/configuration';


@Injectable()
export class IntervalsInfoService {

    protected basePath = 'http://localhost:9494';
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
     * Returns a list of intervals info about wells
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsIntervalsInfoGet(observe?: 'body', reportProgress?: boolean): Observable<Array<IntervalsInfoResponse>>;
    public wellsIntervalsInfoGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<IntervalsInfoResponse>>>;
    public wellsIntervalsInfoGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<IntervalsInfoResponse>>>;
    public wellsIntervalsInfoGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<IntervalsInfoResponse>>('get',`${this.basePath}/wells/intervalsInfo`,
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
     * delete intervals Info by id
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsIntervalsInfoIdDelete(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsIntervalsInfoIdDelete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsIntervalsInfoIdDelete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsIntervalsInfoIdDelete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling wellsIntervalsInfoIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/wells/intervalsInfo/${encodeURIComponent(String(id))}`,
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
     * Obtain intervalsInfo about well by id
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsIntervalsInfoIdGet(id: number, observe?: 'body', reportProgress?: boolean): Observable<Array<IntervalsInfoResponse>>;
    public wellsIntervalsInfoIdGet(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<IntervalsInfoResponse>>>;
    public wellsIntervalsInfoIdGet(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<IntervalsInfoResponse>>>;
    public wellsIntervalsInfoIdGet(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling wellsIntervalsInfoIdGet.');
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

        return this.httpClient.request<Array<IntervalsInfoResponse>>('get',`${this.basePath}/wells/intervalsInfo/${encodeURIComponent(String(id))}`,
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
     * update intervals Info about well by id
     * @param body
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsIntervalsInfoIdPut(body: IntervalsInfoRequest, id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsIntervalsInfoIdPut(body: IntervalsInfoRequest, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsIntervalsInfoIdPut(body: IntervalsInfoRequest, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsIntervalsInfoIdPut(body: IntervalsInfoRequest, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling wellsIntervalsInfoIdPut.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling wellsIntervalsInfoIdPut.');
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

        return this.httpClient.request<any>('put',`${this.basePath}/wells/intervalsInfo/${encodeURIComponent(String(id))}`,
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
     * Lets a user post a new intervalsInfo
     * @param body
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsIntervalsInfoPost(body: IntervalsInfoRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsIntervalsInfoPost(body: IntervalsInfoRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsIntervalsInfoPost(body: IntervalsInfoRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsIntervalsInfoPost(body: IntervalsInfoRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling wellsIntervalsInfoPost.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/wells/intervalsInfo`,
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
