import { FluidLevelMeasurementRequest } from './../../model/fluidLevelMeasurementRequest';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FluidLevelMeasurementsService } from 'src/app/api/fluidLevelMeasurements.service';

@Component({
  selector: 'app-add-new-flm',
  templateUrl: './add-new-flm.component.html',
  styleUrls: ['./add-new-flm.component.css']
})
export class AddNewFlmComponent implements OnInit {

  form: FormGroup;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private _fluidLevelMeasurementsSerive: FluidLevelMeasurementsService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      date:['', [Validators.required]],
      intervals:['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      flType:['', [Validators.required]],
      fluidLevel:['', [Validators.required]],
      pumpDepth:['', [Validators.required]],
      liqPercentage:['', [Validators.required]],
      pumpFillage:['', [Validators.required]],
      pumpSubmerge:['', [Validators.required]],
      card:['', [Validators.required]],
      remarks:['', [Validators.required, Validators.minLength(5), Validators.maxLength(2000)]]
    })
  }

  insert() {
    debugger
    let flmRequest: FluidLevelMeasurementRequest = this.form.value as FluidLevelMeasurementRequest
    console.log(this.form);
    this._fluidLevelMeasurementsSerive.wellsWellIdFluidLevelMeasurementsPost(flmRequest, 1).subscribe(
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
