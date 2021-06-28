import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FieldRequest} from "../../../model/fieldRequest";
import { AllFieldsResponse } from 'src/app/model/allFieldsResponse';
import { FieldService } from 'src/app/api/field.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-update-field',
  templateUrl: './app-update-field.component.html',
  styleUrls: ['./app-update-field.component.css']
})
export class AppUpdateFieldComponent implements OnInit {

  form: FormGroup;

  @Input()
  fieldToBeUpdate: AllFieldsResponse;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private _fieldService: FieldService, private _formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      fieldName:['', [Validators.required]],

    })

  }

  update(){
    let fieldRequest: FieldRequest = this.form.value as FieldRequest

    this._fieldService.updatefieldMeasurement(fieldRequest,this.fieldToBeUpdate.fieldId,null,null).subscribe(
      response => {

        this.closeModal.emit()
      },
      error => {
        // console.log(error + "cc")
      }
    );
  }


}
