import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DrilingInfoService} from 'src/app/api/drilingInfo.service';
import { DrillingInfoDataResponse } from 'src/app/model/drillingInfoDataResponse';
import { DrillingInfoDataRequest} from 'src/app/model/drillingInfoDataRequest';
import {FormGroup, Validators , FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-update-drilling-info',
  templateUrl: './update-drilling-info.component.html',
  styleUrls: ['./update-drilling-info.component.css']
})
export class UpdateDrillingInfoComponent implements OnInit {
  @Input()
 drillingUpdate: DrillingInfoDataResponse ;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  convertedDate: string;
  form: FormGroup;
  convertedTime: string;
  constructor(private _drillingInfoService: DrilingInfoService , private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this._formBuilder.group({
      date:['', [Validators.required]],
      time:['', [Validators.required]],
      wellDescription:['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      wellType:['', [Validators.required]],
      boreType:['', [Validators.required]],
      measuredDepth:['', [Validators.required]],
      tvdDepth:['', [Validators.required]],
      bbtp:['', [Validators.required]],
      productionGeneralInfo:['', [Validators.required]],
      well:['', [Validators.required]],
    })
    this.dateSeparaterHelper(this.drillingUpdate.releaseDate)
  }
  dateSeparaterHelper(datetime: Date){
    let x = new Date(datetime);
    this.convertedDate = x.toLocaleDateString();
    this.convertedTime = x.getTime().toLocaleString()

  }
  update(){
    // console.log(this.convertedDate);
    let drillingRequest: DrillingInfoDataRequest = this.form.value as DrillingInfoDataRequest
    let dateValues = this.form.controls.date.value.split("-");
    let timeValues = this.form.controls.time.value.split(":");
    drillingRequest.releaseDate = new Date(dateValues[0], dateValues[1]-1, dateValues[2], 0, 0);
    this._drillingInfoService.wellsWellIdDrillingInfoIdPatch(drillingRequest, this.drillingUpdate.wellId, this.drillingUpdate.id).subscribe(
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
