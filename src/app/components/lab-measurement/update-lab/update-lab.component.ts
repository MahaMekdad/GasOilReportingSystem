import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabService } from '../../../api/lab.service';
import { LabMeasurementRequest } from '../../../model/labMeasurementRequest';
import { LabMeasurementResponse } from '../../../model/labMeasurementResponse';

@Component({
  selector: 'app-update-lab',
  templateUrl: './update-lab.component.html',
  styleUrls: ['./update-lab.component.css']
})
export class UpdateLabComponent implements OnInit {

  form: FormGroup;

  @Input()
  id: number;

  @Input()
  labToBeUpdate: LabMeasurementResponse;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  convertedDate: string;

  convertedTime: String;

  wellId: number;

  labs: LabMeasurementResponse[]


  constructor(private _labService: LabService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this._formBuilder.group({
      date:['', [Validators.required]],
      time:['', [Validators.required]],
      remarks:['', [Validators.required]],
      s1:['', [Validators.required]],
      s2:['', [Validators.required]],
      s3:['', [Validators.required]],
      s4:['', [Validators.required]],
      s5:['', [Validators.required]]
    })

    this.dateSeparaterHelper(this.labToBeUpdate.date)
  }

  update(){
    // console.log(this.convertedDate);
    let labRequest: LabMeasurementRequest = this.form.value as LabMeasurementRequest
    let dateValues = this.form.controls.date.value.split("-");
    labRequest.date = new Date(dateValues[0], dateValues[1]-1, dateValues[2], 0, 0);
    this._labService.updateLabMeasurement(labRequest, this.id, this.labToBeUpdate.id).subscribe(
      response => {
        // console.log(response + "ff")
        this.closeModal.emit()
      },
      error => {
        // console.log(error + "cc")
      }
    );
  }

  dateSeparaterHelper(datetime: Date){
    let x = new Date(datetime);
    this.convertedDate = x.toLocaleDateString();
    this.convertedTime = x.getTime().toLocaleString()
  }
}
