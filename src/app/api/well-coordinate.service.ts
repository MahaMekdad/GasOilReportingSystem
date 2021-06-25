import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WellCoordinates } from '../model/wellCoordinates';
import { Observable }   from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WellCoordinateService {

  protected basePath = 'http://localhost:8080';
  constructor(private httpClient:HttpClient) { }

  public wellsCoordinatesGet(fieldId:number ): Observable<any> {
    return this.httpClient.request<Array<WellCoordinates>>('get',`${this.basePath}/wellsCoordinates/${fieldId}`);

  }

}
