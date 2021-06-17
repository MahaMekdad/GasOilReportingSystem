import { Component, OnInit } from '@angular/core';
import { WellDailyActionsService } from 'src/app/api/wellDailyActions.service';
import { WellDailyActionsResponse } from 'src/app/model/wellDailyActionsResponse';

@Component({
  selector: 'app-daily-actions',
  templateUrl: './daily-actions.component.html',
  styleUrls: ['./daily-actions.component.css']
})
export class DailyActionsComponent implements OnInit {

  constructor(private _wellDaily: WellDailyActionsService) { }

  reports: WellDailyActionsResponse[]


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

}
