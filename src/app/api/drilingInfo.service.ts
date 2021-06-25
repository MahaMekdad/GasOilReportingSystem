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

import { DrillingInfoDataRequest } from '../model/drillingInfoDataRequest';
import { DrillingInfoDataResponse } from '../model/drillingInfoDataResponse';
import { ErrorDetails } from '../model/errorDetails';

import { BASE_PATH, COLLECTION_FORMATS }                     from 'service_utils/variables';
import { Configuration }                                     from 'service_utils/configuration';


@Injectable()
export class DrilingInfoService {

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
     * getting the drilling inforamtion for all wells
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsDrillingInfoGet(observe?: 'body', reportProgress?: boolean): Observable<Array<DrillingInfoDataResponse>>;
    public wellsDrillingInfoGet(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DrillingInfoDataResponse>>>;
    public wellsDrillingInfoGet(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DrillingInfoDataResponse>>>;
    public wellsDrillingInfoGet(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<DrillingInfoDataResponse>>('get',`${this.basePath}/wells/drillingInfo`,
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
     * delteing drilling info for specific well
     * @param wellId well id that we want to delete it
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdDrillingInfoDelete(wellId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdDrillingInfoDelete(wellId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdDrillingInfoDelete(wellId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdDrillingInfoDelete(wellId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdDrillingInfoDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/drillingInfo`,
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
     * getting the drilling inforamtion for specific well
     * @param wellId pass the id of a specific well
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdDrillingInfoGet(wellId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<DrillingInfoDataResponse>>;
    public wellsWellIdDrillingInfoGet(wellId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DrillingInfoDataResponse>>>;
    public wellsWellIdDrillingInfoGet(wellId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DrillingInfoDataResponse>>>;
    public wellsWellIdDrillingInfoGet(wellId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdDrillingInfoGet.');
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

        return this.httpClient.request<Array<DrillingInfoDataResponse>>('get',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/drillingInfo`,
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
     * delteing drilling info for specific well
     * @param wellId well id that we want to delete it
     * @param id pass the id of the record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdDrillingInfoIdDelete(wellId: number, id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdDrillingInfoIdDelete(wellId: number, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdDrillingInfoIdDelete(wellId: number, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdDrillingInfoIdDelete(wellId: number, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdDrillingInfoIdDelete.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling wellsWellIdDrillingInfoIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/drillingInfo/${encodeURIComponent(String(id))}`,
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
     * getting the drilling inforamtion for specific well
     * @param wellId pass the id of a specific well
     * @param id pass the id of the record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdDrillingInfoIdGet(wellId: number, id: number, observe?: 'body', reportProgress?: boolean): Observable<DrillingInfoDataResponse>;
    public wellsWellIdDrillingInfoIdGet(wellId: number, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<DrillingInfoDataResponse>>;
    public wellsWellIdDrillingInfoIdGet(wellId: number, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<DrillingInfoDataResponse>>;
    public wellsWellIdDrillingInfoIdGet(wellId: number, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdDrillingInfoIdGet.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling wellsWellIdDrillingInfoIdGet.');
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

        return this.httpClient.request<DrillingInfoDataResponse>('get',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/drillingInfo/${encodeURIComponent(String(id))}`,
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
     * updating drilling info for specific well
     * @param body 
     * @param wellId well id that we want to update it
     * @param id pass the id of the record
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdDrillingInfoIdPatch(body: DrillingInfoDataRequest, wellId: number, id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdDrillingInfoIdPatch(body: DrillingInfoDataRequest, wellId: number, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdDrillingInfoIdPatch(body: DrillingInfoDataRequest, wellId: number, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdDrillingInfoIdPatch(body: DrillingInfoDataRequest, wellId: number, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling wellsWellIdDrillingInfoIdPatch.');
        }

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdDrillingInfoIdPatch.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling wellsWellIdDrillingInfoIdPatch.');
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

        return this.httpClient.request<any>('patch',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/drillingInfo/${encodeURIComponent(String(id))}`,
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
     * adding new drilling info for specefic well
     * @param body 
     * @param wellId pass the id of a specific well
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public wellsWellIdDrillingInfoPost(body: DrillingInfoDataRequest, wellId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public wellsWellIdDrillingInfoPost(body: DrillingInfoDataRequest, wellId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public wellsWellIdDrillingInfoPost(body: DrillingInfoDataRequest, wellId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public wellsWellIdDrillingInfoPost(body: DrillingInfoDataRequest, wellId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling wellsWellIdDrillingInfoPost.');
        }

        if (wellId === null || wellId === undefined) {
            throw new Error('Required parameter wellId was null or undefined when calling wellsWellIdDrillingInfoPost.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/wells/${encodeURIComponent(String(wellId))}/drillingInfo`,
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
