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
import { ProductionBudegetDataResponse } from '../model/productionBudegetDataResponse';
import { ProductionBudegetRequest } from '../model/productionBudegetRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from 'service_utils/variables';
import { Configuration }                                     from 'service_utils/configuration';


@Injectable()
export class ProductionBudgetService {

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
     * 
     * gell all budgets in specific date
     * @param date specific date to get all the budgets of the concessions
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public concessionsBudgetProductionBudgetGet(date?: Date, observe?: 'body', reportProgress?: boolean): Observable<Array<ProductionBudegetDataResponse>>;
    public concessionsBudgetProductionBudgetGet(date?: Date, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<ProductionBudegetDataResponse>>>;
    public concessionsBudgetProductionBudgetGet(date?: Date, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<ProductionBudegetDataResponse>>>;
    public concessionsBudgetProductionBudgetGet(date?: Date, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (date !== undefined && date !== null) {
            queryParameters = queryParameters.set('date', <any>date.toISOString());
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

        return this.httpClient.request<Array<ProductionBudegetDataResponse>>('get',`${this.basePath}/concessions/budget/productionBudget`,
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
     * deleting budget of a concession in specific date
     * @param id well id that we want to delete it
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public concessionsBudgetProductionBudgetIdDelete(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public concessionsBudgetProductionBudgetIdDelete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public concessionsBudgetProductionBudgetIdDelete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public concessionsBudgetProductionBudgetIdDelete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling concessionsBudgetProductionBudgetIdDelete.');
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

        return this.httpClient.request<any>('delete',`${this.basePath}/concessions/budget/productionBudget/${encodeURIComponent(String(id))}`,
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
     * updating budget of a concession in specific date
     * @param body 
     * @param id well id that we want to delete it
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public concessionsBudgetProductionBudgetIdPatch(body: ProductionBudegetRequest, id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public concessionsBudgetProductionBudgetIdPatch(body: ProductionBudegetRequest, id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public concessionsBudgetProductionBudgetIdPatch(body: ProductionBudegetRequest, id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public concessionsBudgetProductionBudgetIdPatch(body: ProductionBudegetRequest, id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling concessionsBudgetProductionBudgetIdPatch.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling concessionsBudgetProductionBudgetIdPatch.');
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

        return this.httpClient.request<any>('patch',`${this.basePath}/concessions/budget/productionBudget/${encodeURIComponent(String(id))}`,
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
     * adding new prdouction budget for concessions
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public concessionsBudgetProductionBudgetPost(body: ProductionBudegetRequest, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public concessionsBudgetProductionBudgetPost(body: ProductionBudegetRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public concessionsBudgetProductionBudgetPost(body: ProductionBudegetRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public concessionsBudgetProductionBudgetPost(body: ProductionBudegetRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling concessionsBudgetProductionBudgetPost.');
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

        return this.httpClient.request<any>('post',`${this.basePath}/concessions/budget/productionBudget`,
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
