import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FieldRequest} from "../../../model/fieldRequest";
import { AllFieldsResponse } from 'src/app/model/allFieldsResponse';
import { FieldService } from 'src/app/api/field.service';
import { ConcessionsService} from 'src/app/api/concessions.service';
import { ConcessionResponse } from 'src/app/model/concessionResponse';

@Component({
  selector: 'app-app-add-new-field',
  templateUrl: './app-add-new-field.component.html',
  styleUrls: ['./app-add-new-field.component.css']
})
export class AppAddNewFieldComponent implements OnInit {
  allConcessions: ConcessionResponse[]
  fields: AllFieldsResponse []
  form: FormGroup;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  constructor(private _fieldService: FieldService, private _formBuilder: FormBuilder , private _concessionService: ConcessionsService) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      fieldName:['', [Validators.required]],
      Concession:['', [Validators.required]]
    })

    this._concessionService.findAllConcessions(null,null).subscribe(
      response => {
        this.allConcessions = response;
      },
      error => {
        // console.log(error)
      })
  }
  insert() {
    // debugger
    let fieldRequest: FieldRequest = this.form.value as FieldRequest;
    fieldRequest.concessionId = this.form.controls.Concession.value;
    // console.log(fieldRequest)
    this._fieldService.addfieldMeasurement(fieldRequest,null,null).subscribe(
      response => {

        this.closeModal.emit()
      },
      error => {
        // console.log(error + "cc")
      }
    );
  }
}
