import { DatePipe, Time } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { FluidLevelMeasurementsService } from 'src/app/api/fluidLevelMeasurements.service';
import { AllFluidLevelMeasurementResponse } from 'src/app/model/allFluidLevelMeasurementResponse';
import { FluidLevelMeasurementRequest } from 'src/app/model/fluidLevelMeasurementRequest';
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-flm',
  templateUrl: './update-flm.component.html',
  styleUrls: ['./update-flm.component.css']
})
export class UpdateFlmComponent implements OnInit {

  form: FormGroup;

  @Input()
  flmToBeUpdate: AllFluidLevelMeasurementResponse;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  convertedDate: string;

  convertedTime: Timestamp<Number>;

  constructor(private _fluidLevelMeasurementsSerive: FluidLevelMeasurementsService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      date:['', [Validators.required]],
      time:['', [Validators.required]],
      intervals:['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      flType:['', [Validators.required]],
      fluidLevel:['', [Validators.required]],
      pumpDepth:['', [Validators.required]],
      liqPercentage:['', [Validators.required]],
      pumpFillage:['', [Validators.required]],
      pumpSubmerge:['', [Validators.required]],
      card:['', [Validators.required]],
      remarks:['', [Validators.minLength(5), Validators.maxLength(2000)]],
      well: ['', [Validators.required]]
    })

    this.dateSeparaterHelper(this.flmToBeUpdate.date)
  }

  update(){
    console.log(this.convertedDate);
    let flmRequest: FluidLevelMeasurementRequest = this.form.value as FluidLevelMeasurementRequest
    let dateValues = this.form.controls.date.value.split("-");
    let timeValues = this.form.controls.time.value.split(":");
    flmRequest.date = new Date(dateValues[0], dateValues[1], dateValues[2], timeValues[0], timeValues[1])
    console.log(flmRequest.date)
    this._fluidLevelMeasurementsSerive.wellsWellIdFluidLevelMeasurementsFlmIdPatch(flmRequest, this.flmToBeUpdate.wellId, this.flmToBeUpdate.id).subscribe(
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

    console.log(x.toLocaleDateString('en-UK'));
    // let stringDate = new DatePipe("en-US").transform(datetime, 'yyyy-MM-ddTHH:mm:ss');
    // console.log(stringDate)
    // let wholeDate = stringDate.split("T");
    // let date = wholeDate[0];
    // let time = wholeDate[1]
    // let dateValues = date.split("-");
    this.convertedDate = x.toLocaleDateString('en-UK');
    // this.convertedDate = new Date(Number.parseInt(dateValues[0]) , Number.parseInt(dateValues[1]), Number.parseInt(dateValues[2]));
    // let timeValues = time.split(":");
    // this.convertedTime = new Timestamp(Number.parseInt(timeValues[0]), Number.parseInt(timeValues[1]))
    // console.log(this.convertedDate)
    // console.log(this.convertedTime)
  }
}
