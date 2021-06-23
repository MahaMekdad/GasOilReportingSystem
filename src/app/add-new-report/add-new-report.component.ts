import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WellDailyActionsService } from '../api/wellDailyActions.service';
import { WellDailyActionsRequest } from '../model/wellDailyActionsRequest';
import { AllWellsResponse } from 'src/app/model/allWellsResponse';
import { WellService } from 'src/app/api/well.service';



@Component({
  selector: 'app-add-new-report',
  templateUrl: './add-new-report.component.html',
  styleUrls: ['./add-new-report.component.css']
})
export class AddNewReportComponent implements OnInit {

  wellId:number;
  allWells: AllWellsResponse[]
  form: FormGroup;
  form2: FormGroup;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  
  constructor(private _wellDailyActionsService: WellDailyActionsService, private _formBuilder: FormBuilder,private _wellService: WellService) { }

  ngOnInit(): void { 

    this.form2 = this._formBuilder.group({
      wellIdIns:['', [Validators.required]],
    })



    this.form = this._formBuilder.group({
      date:['', [Validators.required]],
      // time:['', [Validators.required]],
      siLVL4:['', [Validators.required]],
      actionDescription:['', [Validators.required]],
      losses:['', [Validators.required]],
      netProduction:['', [Validators.required]],
      downTime:['', [Validators.required]],

    })
    
  

  this._wellService.getwells().subscribe(
    response => {
      this.allWells = response;
    },
    error => {
      console.log(error)
  })
  
}

  insert() {
    // debugger
    let reportRequest: WellDailyActionsRequest = this.form.value as WellDailyActionsRequest
    // console.log(this.form);
    // console.log(this.form.controls.well.value);
    // console.log(this.form.controls.date);
    // console.log(this.form.controls.time.value);
    let dateValues = this.form.controls.date.value.split("-");
    // let timeValues = this.form.controls.time.value.split(":");
    console.log(dateValues)
    // console.log(dateValues[0])
    // console.log(timeValues)
    reportRequest.date = new Date(dateValues[0], dateValues[1]-1, dateValues[2], 0, 0)
    console.log(reportRequest.date)
    this._wellDailyActionsService.addDailyReport(reportRequest, this.wellId).subscribe(
      response => {
        console.log(response + "ff")
        this.closeModal.emit()
      },
      error => {
        console.log(error + "cc")
      }
    );
  }

}