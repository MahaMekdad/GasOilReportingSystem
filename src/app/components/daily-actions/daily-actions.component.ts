import { Component, OnInit } from '@angular/core';
import { WellDailyActionsService } from 'src/app/api/wellDailyActions.service';
import { WellDailyActionsResponse } from 'src/app/model/wellDailyActionsResponse';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ReportRequest } from 'src/app/model/ReportRequest';
import { WellDailyActionsRequest } from 'src/app/model/wellDailyActionsRequest';


@Component({
  selector: 'app-daily-actions',
  templateUrl: './daily-actions.component.html',
  styleUrls: ['./daily-actions.component.css']
})
export class DailyActionsComponent implements OnInit {

  constructor(private _wellDaily: WellDailyActionsService,private _http: HttpClient) { }

  reports: WellDailyActionsResponse[]
  

  id: number;
  message:string="";
  siLVL4: number;
  actionDescription: String;
  netProduction: number;
  downTime: number;
  idEdit: number;
  wellId: number;
  losses: number;
  date: String;

  r: WellDailyActionsRequest={
  siLVL4: 0.0,
  actionDescription: 'write here',
  netProduction: 0.0,
  downTime: 0.0,
  losses: 0.0,
  date: new Date()
  };

  r2: WellDailyActionsRequest={
    siLVL4: 0.0,
    actionDescription: 'write here',
    netProduction: 0.0,
    downTime: 0.0,
    losses: 0.0,
    date: new Date()
    };

  ngOnInit(): void {
    this._wellDaily.getAllReports(null, null).subscribe(
      data => {
        // console.log(data)
        this.reports= data;
      }
    )
  }

  deleteFromReports(index: number) {
    let report = this.reports[index];
    this._wellDaily.deleteReportById(1,report.id).subscribe(
      response => {
        this.reports.splice(index, 1);
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }

  private body = new HttpParams()
  .set('ShutinLevel4', '123456')
  .set('actionDescription', '123456')
  .set('netProduction', '123456')
  .set('down time', '123456')
  .set('losses', '123456')
  .set('date', '1978-03-26T17:09:08.459Z')

;

// insert(){
//   this._http.post('http://localhost:9595/wells/1/dailyActions',
//      this.body.toString(),
//      {
//        headers: new HttpHeaders()
//          .set('Content-Type', 'application/json')
//      }
//    )
//  .pipe(
//  catchError(this.handleError) // then handle the error
// );

// }

insert():void{
  this._wellDaily.addDailyReport(this.r,this.id).subscribe( Response=>{
    this.message="Added";
  },error => {
    this.message=error.error.errorMessage;
    console.log(this.message);
  });
}

edit():void{
  this._wellDaily.updateWellReport(this.r2,this.wellId,this.idEdit).subscribe( Response=>{
    this.message="Edited";
  },error => {
    this.message=error.error.errorMessage;
    console.log(this.message);
  });
}


private handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}
}
