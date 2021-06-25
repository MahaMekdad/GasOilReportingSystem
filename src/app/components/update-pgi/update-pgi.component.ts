import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductionGeneralInfoService } from 'src/app/api/productionGeneralInfo.service';
import { ProductionGeneralInfoRequest } from 'src/app/model/productionGeneralInfoRequest';
import { ProductionGeneralInfoResponse } from 'src/app/model/productionGeneralInfoResponse';

@Component({
  selector: 'app-update-pgi',
  templateUrl: './update-pgi.component.html',
  styleUrls: ['./update-pgi.component.css']
})
export class UpdatePgiComponent implements OnInit {

  form: FormGroup;

  @Input()
  pgiToBeUpdated: ProductionGeneralInfoResponse;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  convertedInitialProdDate: string;
  convertedCurrentWellTypeDate: String;
  currentLiftTypeDateDate: String;

  initialTypeEnums = Object.values(ProductionGeneralInfoResponse.InitialTypeEnum);
  initialProductEnums = Object.values(ProductionGeneralInfoResponse.InitialProductEnum);
  initialLiftTypeEnums = Object.values(ProductionGeneralInfoResponse.InitialLiftTypeEnum);
  initStatusEnums = Object.values(ProductionGeneralInfoResponse.InitStatusEnum);
  monitoringSystemEnums = Object.values(ProductionGeneralInfoResponse.MonitoringSystemEnum);
  currentWellTypeEnums = Object.values(ProductionGeneralInfoResponse.CurrentWellTypeEnum);
  currentProductEnums = Object.values(ProductionGeneralInfoResponse.CurrentProductEnum);
  currentStatusEnums = Object.values(ProductionGeneralInfoResponse.CurrentStatusEnum);
  currentLiftTypeEnums = Object.values(ProductionGeneralInfoResponse.CurrentLiftTypeEnum);
  powerSourceTypeEnums = Object.values(ProductionGeneralInfoResponse.PowerSourceTypeEnum);
  processionPlantEnums = Object.values(ProductionGeneralInfoResponse.ProcessionPlantEnum);

  constructor(private _formBuilder: FormBuilder, private _productionGeneralInfoService: ProductionGeneralInfoService) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      initialProdDate:['', [Validators.required]],
      initialType:['', [Validators.required]],
      initialProduct:['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      initialLiftType:['', [Validators.required]],
      initStatus:['', [Validators.required]],
      monitoringSystem:['', [Validators.required]],
      currentWellType:['', [Validators.required]],
      currentWellTypeDate:['', [Validators.required]],
      currentProduct:['', [Validators.required]],
      currentStatus:['', [Validators.required]],
      runtime:['', [Validators.minLength(5), Validators.maxLength(2000)]],
      currentLiftType: ['', [Validators.required]],
      currentLiftTypeDate: ['', [Validators.required]],
      powerSourceType: ['', [Validators.required]],
      powerSource: ['', [Validators.required]],
      processionPlant: ['', [Validators.required]]
    })
    console.log(this.pgiToBeUpdated.initialProdDate)
  }

  update(){
    // console.log(this.convertedDate);
    let pgiRequest: ProductionGeneralInfoRequest = this.form.value as ProductionGeneralInfoRequest
    let initialProdDateValues = this.form.controls.initialProdDate.value.split("-");
    let currentWellTypeDateValues = this.form.controls.currentWellTypeDate.value.split("-");
    let currentLiftTypeDateValues = this.form.controls.currentLiftTypeDate.value.split("-");
    pgiRequest.initialProdDate = new Date(initialProdDateValues[0], initialProdDateValues[1]-1, initialProdDateValues[2], 0, 0)
    pgiRequest.currentWellTypeDate = new Date(currentWellTypeDateValues[0], currentWellTypeDateValues[1]-1, currentWellTypeDateValues[2], 0, 0)
    pgiRequest.currentLiftTypeDate = new Date(currentLiftTypeDateValues[0], currentLiftTypeDateValues[1]-1, currentLiftTypeDateValues[2], 0, 0)
    this._productionGeneralInfoService.wellsWellIdProductionGeneralInfoPgiIdPut(pgiRequest, 1, this.pgiToBeUpdated.id).subscribe(
      response => {
        console.log(response + "ff")
        this.closeModal.emit()
      },
      error => {
        console.log(error + "cc")
      }
    );
  }

  convertedInitialProdDateHelper(datetime: Date){
    let x = new Date(datetime);
    this.convertedInitialProdDate = x.toLocaleDateString();
  }

  currentWellTypeDateHelper(datetime: Date){
    let x = new Date(datetime);
    this.convertedCurrentWellTypeDate = x.toLocaleDateString();
  }

  currentLiftTypeDateHelper(datetime: Date){
    let x = new Date(datetime);
    this.currentLiftTypeDateDate = x.toLocaleDateString();
  }

}
