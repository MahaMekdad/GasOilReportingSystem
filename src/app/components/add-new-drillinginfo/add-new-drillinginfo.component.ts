import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AllWellsResponse} from "../../model/allWellsResponse";
import {WellService} from "../../api/well.service";
import {DrilingInfoService} from "../../api/drilingInfo.service";
import { DrillingInfoDataRequest } from './../../model/drillingInfoDataRequest';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-new-drillinginfo',
  templateUrl: './add-new-drillinginfo.component.html',
  styleUrls: ['./add-new-drillinginfo.component.css']
})
export class AddNewDrillinginfoComponent implements OnInit {
  allWells: AllWellsResponse[]
  form: FormGroup;
  window: NgbModalRef;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private _drillingService: DrilingInfoService ,  private _formBuilder: FormBuilder, private _wellService: WellService ,private modalService: NgbModal) { }
  // releaseDate?: Date;
  // wellDescription?: string;
  // wellType?: string;
  // boreType?: string;
  // measuredDepth?: number;
  // tvdDepth?: number;
  // bbtp?: number;
  // productionGeneralInfo?: string;
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      date:['', [Validators.required]],
      time:['', [Validators.required]],
      wellDescription:['', [Validators.required]],
      wellType:['', [Validators.required]],
      boreType:['', [Validators.required]],
      measuredDepth:['', [Validators.required]],
      tvdDepth:['', [Validators.required]],
      bbtp:['', [Validators.required]],
      productionGeneralInfo:['', [Validators.required]],
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
    let drillInfo: DrillingInfoDataRequest = this.form.value as DrillingInfoDataRequest;
    console.log(this.form);
    console.log(this.form.controls.well.value);
    console.log(this.form.controls.date);
    console.log(this.form.controls.time.value);
    let dateValues = this.form.controls.date.value.split("-");
    let timeValues = this.form.controls.time.value.split(":");
    drillInfo.releaseDate = new Date(dateValues[0], dateValues[1]-1, dateValues[2], timeValues[0], timeValues[1])
    console.log(drillInfo.releaseDate)
    console.log("-------------");
    console.log(drillInfo)
    console.log(drillInfo.wellDescription);
    console.log("--------------");
    console.log(this.form.controls.well.value);
    this._drillingService.wellsWellIdDrillingInfoPost(drillInfo, this.form.controls.well.value).subscribe(
      response => {
        this.closeModal.emit();
      },
      error => {

      }
    );
  }

}
