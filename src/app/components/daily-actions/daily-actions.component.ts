import { Component, OnInit } from '@angular/core';
import { WellDailyActionsService } from 'src/app/api/wellDailyActions.service';
import { WellDailyActionsResponse } from 'src/app/model/wellDailyActionsResponse';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-daily-actions',
  templateUrl: './daily-actions.component.html',
  styleUrls: ['./daily-actions.component.css']
})
export class DailyActionsComponent implements OnInit { 
  config: any;


  reports: WellDailyActionsResponse[]

  reportToBeUpdate: WellDailyActionsResponse;

  highlightedRow: number = -1;

  modalContent: NgbModalRef

  constructor(private _wellDailyActionsService: WellDailyActionsService, private _modalService: NgbModal) { 
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.reports
    };

  }

  triggerModal(content) {
    this.modalContent = content;
    this.modalContent = this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  ngOnInit(): void {
    this.loadRecords()
  }

  ClickedRowToDelete(index: number)
  {
    if(this.highlightedRow == index)
    {
      this.highlightedRow = -1;
      return;
    }
    this.highlightedRow = index;
  }

  ClickedRowToUpdate(index: number)
  {
    if(this.highlightedRow == -1 || this.highlightedRow == undefined){
      this.reportToBeUpdate = null;
      return;
    }
    let x = this.reports[this.highlightedRow];
    this.reportToBeUpdate = x;
  }

  deleteFromReports() {
    if(this.highlightedRow == -1 || this.highlightedRow == undefined){
      return;
    }
    let report = this.reports[this.highlightedRow];
    this._wellDailyActionsService.deleteReportById(1, report.id).subscribe(
      response => {
        this.reports.splice(this.highlightedRow, 1);
        this.highlightedRow = -1;
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }

  loadRecords(){
    this._wellDailyActionsService.getAllReports(null, null).subscribe(
      data => {
        this.reports = data;
      })
  }

  closePopUpAndRefreshTable(){
    this.modalContent.dismiss();
    this.loadRecords();
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}





