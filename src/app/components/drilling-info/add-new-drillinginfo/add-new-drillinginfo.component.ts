import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AllWellsResponse} from "../../../model/allWellsResponse";
import {WellService} from "../../../api/well.service";
import {DrilingInfoService} from "../../../api/drilingInfo.service";
import { DrillingInfoDataRequest } from '../../../model/drillingInfoDataRequest';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-add-new-drillinginfo',
  templateUrl: './add-new-drillinginfo.component.html',
  styleUrls: ['./add-new-drillinginfo.component.css']
})
export class AddNewDrillinginfoComponent implements OnInit {
  @Input()
  id: number;
  // allWells: AllWellsResponse[]
  form: FormGroup;
  window: NgbModalRef;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private _drillingService: DrilingInfoService ,  private _formBuilder: FormBuilder, private _wellService: WellService ,private modalService: NgbModal) { }
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      date:['', [Validators.required]],
      // time:['', [Validators.required]],
      wellDescription:['', [Validators.required]],
      wellType:['', [Validators.required]],
      boreType:['', [Validators.required]],
      measuredDepth:['', [Validators.required]],
      tvdDepth:['', [Validators.required]],
      bbtp:['', [Validators.required]],
      // productionGeneralInfo:['', [Validators.required]],
      // well: ['', [Validators.required]]
    })
    // this._wellService.getwells().subscribe(
    //   response => {
    //     this.allWells = response;
    //   },
    //   error => {
    //     console.log(error)
    //   })
  }

  insert() {
    // debugger
    let drillInfo: DrillingInfoDataRequest = this.form.value as DrillingInfoDataRequest;
    // console.log(this.form);
    // console.log(this.form.controls.well.value);
    // console.log(this.form.controls.date);
    // console.log(this.form.controls.time.value);
    let dateValues = this.form.controls.date.value.split("-");
    // let timeValues = this.form.controls.time.value.split(":");
    drillInfo.releaseDate = new Date(dateValues[0], dateValues[1]-1, dateValues[2], 0, 0)
    // console.log(drillInfo.releaseDate)
    // console.log("-------------");
    // console.log(drillInfo)
    // console.log(drillInfo.wellDescription);
    drillInfo.productionGeneralInfo = null;
    this._drillingService.wellsWellIdDrillingInfoPost(drillInfo, this.id).subscribe(
      response => {
        this.closeModal.emit();
      },
      error => {

      }
    );
  }

}
