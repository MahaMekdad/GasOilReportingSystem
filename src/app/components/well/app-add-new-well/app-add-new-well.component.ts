import { AllWellsResponse } from 'src/app/model/allWellsResponse';
import { WellRequest } from '../../../model/wellRequest';
import { WellService } from 'src/app/api/well.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-add-new-well',
  templateUrl: './app-add-new-well.component.html',
  styleUrls: ['./app-add-new-well.component.css']
})
export class AppAddNewWellComponent implements OnInit {
  wells: AllWellsResponse[]
  form: FormGroup;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  constructor(private _wellService: WellService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      wellName:['', [Validators.required]],
      fieldId:['', [Validators.required]]
    })
  }
    insert() {
      // debugger
      let wellRequest: WellRequest = this.form.value as WellRequest
      this._wellService.addwell(wellRequest,null,null).subscribe(
        response => {

          this.closeModal.emit()
        },
        error => {
          console.log(error + "cc")
        }
      );
    }


}
