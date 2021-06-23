import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WellDailyActionsService } from '../api/wellDailyActions.service';
import { WellDailyActionsRequest } from '../model/wellDailyActionsRequest';
import { WellDailyActionsResponse } from '../model/wellDailyActionsResponse';

@Component({
  selector: 'app-update-report',
  templateUrl: './update-report.component.html',
  styleUrls: ['./update-report.component.css']
})
export class UpdateReportComponent implements OnInit {

  form: FormGroup;

  @Input()
  reportToBeUpdate: WellDailyActionsResponse;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  convertedDate: string;

  convertedTime: String;

  wellId: number;

  reports: WellDailyActionsResponse[]


  constructor(private _wellDailyActionsService: WellDailyActionsService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this._formBuilder.group({
      date:['', [Validators.required]],
      time:['', [Validators.required]],
      siLVL4:['', [Validators.required]],
      actionDescription:['', [Validators.required]],
      losses:['', [Validators.required]],
      netProduction:['', [Validators.required]],
      downTime:['', [Validators.required]],
    })

    this.dateSeparaterHelper(this.reportToBeUpdate.date)
  }

  update(){
    // console.log(this.convertedDate);
    let reportRequest: WellDailyActionsRequest = this.form.value as WellDailyActionsRequest
    let dateValues = this.form.controls.date.value.split("-");
    let timeValues = this.form.controls.time.value.split(":");
    reportRequest.date = new Date(dateValues[0], dateValues[1]-1, dateValues[2], 0, 0);
    this._wellDailyActionsService.updateWellReport(reportRequest, this.wellId, this.reportToBeUpdate.id).subscribe(
      response => {
        console.log(response + "ff")
        this.closeModal.emit()
      },
      error => {
        console.log(error + "cc")
      }
    );
  }

  dateSeparaterHelper(datetime: Date){
    let x = new Date(datetime);
    this.convertedDate = x.toLocaleDateString();
    this.convertedTime = x.getTime().toLocaleString()
  }
}
