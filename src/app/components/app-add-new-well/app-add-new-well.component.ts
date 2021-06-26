import {AllWellsResponse} from 'src/app/model/allWellsResponse';
import {WellRequest} from './../../model/wellRequest';
import {FieldResponse} from './../../model/fieldResponse';
import {WellService} from 'src/app/api/well.service';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FieldService} from "../../api/field.service";

@Component({
  selector: 'app-app-add-new-well',
  templateUrl: './app-add-new-well.component.html',
  styleUrls: ['./app-add-new-well.component.css']
})
export class AppAddNewWellComponent implements OnInit {
  fields: FieldResponse[];
  wells: AllWellsResponse[]
  form: FormGroup;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private _wellService: WellService, private _formBuilder: FormBuilder, private _fieldService: FieldService) {
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      wellName: ['', [Validators.required]],
      field: ['', [Validators.required]]
    })

    this._fieldService.getfields().subscribe(
      response => {
        this.fields = response;
      },
      error => {
        console.log(error)
      })
  }

  insert() {
    // debugger
    let wellRequest: WellRequest = this.form.value as WellRequest
    wellRequest.fieldId = this.form.controls.field.value;
    console.log("filed iddddd ==== " + wellRequest.fieldId);
    console.log("Well request object == "+ wellRequest);
    this._wellService.addwell(wellRequest, null, null).subscribe(
      response => {

        this.closeModal.emit()
      },
      error => {
        console.log(error + "cc")
      }
    );
  }


}
