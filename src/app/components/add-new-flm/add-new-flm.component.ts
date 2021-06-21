import { FluidLevelMeasurementRequest } from './../../model/fluidLevelMeasurementRequest';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FluidLevelMeasurementsService } from 'src/app/api/fluidLevelMeasurements.service';
import { WellService } from 'src/app/api/well.service';
import { AllWellsResponse } from 'src/app/model/allWellsResponse';
import { AllFluidLevelMeasurementResponse } from 'src/app/model/allFluidLevelMeasurementResponse';

@Component({
  selector: 'app-add-new-flm',
  templateUrl: './add-new-flm.component.html',
  styleUrls: ['./add-new-flm.component.css']
})
export class AddNewFlmComponent implements OnInit {

  allWells: AllWellsResponse[]
  form: FormGroup;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  
  cardEnums = Object.values(AllFluidLevelMeasurementResponse.CardEnum);

  flTypeEnums = Object.values(AllFluidLevelMeasurementResponse.FlTypeEnum);

  constructor(private _fluidLevelMeasurementsSerive: FluidLevelMeasurementsService, private _formBuilder: FormBuilder, private _wellService: WellService) { }

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
    let flmRequest: FluidLevelMeasurementRequest = this.form.value as FluidLevelMeasurementRequest
    console.log(this.form);
    console.log(this.form.controls.well.value);
    console.log(this.form.controls.date);
    console.log(this.form.controls.time.value);
    let dateValues = this.form.controls.date.value.split("-");
    let timeValues = this.form.controls.time.value.split(":");
    console.log(dateValues)
    console.log(timeValues)
    flmRequest.date = new Date(dateValues[0], dateValues[1]-1, dateValues[2], timeValues[0], timeValues[1])
    console.log(flmRequest.date)
    this._fluidLevelMeasurementsSerive.wellsWellIdFluidLevelMeasurementsPost(flmRequest, this.form.controls.well.value).subscribe(
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
