import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllWellsResponse } from 'src/app/model/allWellsResponse';
import { LabService } from '../api/lab.service';
import { LabMeasurementRequest } from '../model/labMeasurementRequest';



@Component({
  selector: 'app-add-new-lab',
  templateUrl: './add-new-lab.component.html',
  styleUrls: ['./add-new-lab.component.css']
})
export class AddNewLabComponent implements OnInit {

  wellId:number;
  allWells: AllWellsResponse[]
  form: FormGroup;
  form2: FormGroup;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  
  constructor(private _labService: LabService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    this.form = this._formBuilder.group({
      date:['', [Validators.required]],
      remarks:['', [Validators.required]],
      s1:['', [Validators.required]],
      s2:['', [Validators.required]],
      s3:['', [Validators.required]],
      s4:['', [Validators.required]],
      s5:['', [Validators.required]]
    })
    
}

  insert() {
    let labRequest: LabMeasurementRequest = this.form.value as LabMeasurementRequest
    let dateValues = this.form.controls.date.value.split("-");
    console.log(dateValues)
    labRequest.date = new Date(dateValues[0], dateValues[1]-1, dateValues[2], 0, 0)
    console.log(labRequest.date)
    this._labService.addLabMeasurement(labRequest, this.wellId).subscribe(
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
