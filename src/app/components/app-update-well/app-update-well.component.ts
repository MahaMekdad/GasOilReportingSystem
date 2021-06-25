
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AllWellsResponse } from 'src/app/model/allWellsResponse';
import { WellRequest } from './../../model/wellRequest';
import { WellService } from 'src/app/api/well.service';
@Component({
  selector: 'app-app-update-well',
  templateUrl: './app-update-well.component.html',
  styleUrls: ['./app-update-well.component.css']
})
export class AppUpdateWellComponent implements OnInit {

  form: FormGroup;

  @Input()
  wellToBeUpdate: AllWellsResponse;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private _wellService: WellService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      wellName:['', [Validators.required]],
      fieldId:['', [Validators.required]]

    })

  }

  update(){
    let wellRequest: WellRequest = this.form.value as WellRequest

    this._wellService.updateWell(wellRequest,this.wellToBeUpdate.wellId,null,null).subscribe(
      response => {

        this.closeModal.emit()
      },
      error => {
        console.log(error + "cc")
      }
    );
  }


}
