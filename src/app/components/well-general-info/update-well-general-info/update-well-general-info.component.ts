import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WellGeneralInfoService } from 'src/app/api/wellGeneralInfo.service';
import { WellGeneralInfoRequest } from 'src/app/model/wellGeneralInfoRequest';
import { WellGeneralInfoResponse } from 'src/app/model/wellGeneralInfoResponse';

@Component({
  selector: 'app-update-well-general-info',
  templateUrl: './update-well-general-info.component.html',
  styleUrls: ['./update-well-general-info.component.css']
})
export class UpdateWellGeneralInfoComponent implements OnInit {
  form: FormGroup; 
   wellGeneralInfoRequest:WellGeneralInfoRequest={};
  message:string;
  @Input()
  wellGeneralInfoResponse:WellGeneralInfoResponse;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private wellGeneralInfosrvice:WellGeneralInfoService,private _formBuilder:FormBuilder) {
  
  }

  ngOnInit(): void {
   
    this.form = this._formBuilder.group({
      subCompanyName:['', [Validators.required]],
      locationName:['', [Validators.required]],
      areaName:['', [Validators.required]],
      leaseName:['', [Validators.required]],
      boreName:['', [Validators.required]],
      xcord:['', [Validators.required]],
      ycord:['', [Validators.required]],
      lat:['', [Validators.required]],
      longitude:['', [Validators.required]]
    });
      console.log("11");
   setTimeout(()=>{ }, 4000);
  //  console.log(this.wellGeneralInfoResponse);
   this.wellGeneralInfoRequest.areaName=this.wellGeneralInfoResponse.areaName;
   this.wellGeneralInfoRequest.boreName=this.wellGeneralInfoResponse.boreName;
   this.wellGeneralInfoRequest.lat=this.wellGeneralInfoResponse.lat;
   this.wellGeneralInfoRequest.leaseName=this.wellGeneralInfoResponse.leaseName;
   this.wellGeneralInfoRequest.locationName=this.wellGeneralInfoResponse.locationName;
   this.wellGeneralInfoRequest.longitude=this.wellGeneralInfoResponse.longitude;
   this.wellGeneralInfoRequest.subCompanyName=this.wellGeneralInfoResponse.subCompanyName;
   this.wellGeneralInfoRequest.wellId=this.wellGeneralInfoResponse.wellId;
   this.wellGeneralInfoRequest.xcord=this.wellGeneralInfoResponse.xcord;
   this.wellGeneralInfoRequest.ycord=this.wellGeneralInfoResponse.ycord;
  }

  update():void{
    this.wellGeneralInfosrvice.wellsGeneralInfoIdPut(this.wellGeneralInfoRequest,this.wellGeneralInfoResponse.id).subscribe(
      Response=>{
        //this.message="updated successfully";
        this.closeModal.emit();
      }
    )
  }
  

}
