import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IntervalsInfoService } from 'src/app/api/intervalsInfo.service';
import { IntervalsInfoRequest } from 'src/app/model/intervalsInfoRequest';
import { IntervalsInfoResponse } from 'src/app/model/intervalsInfoResponse';

@Component({
  selector: 'app-update-intervals-info',
  templateUrl: './update-intervals-info.component.html',
  styleUrls: ['./update-intervals-info.component.css']
})
export class UpdateIntervalsInfoComponent implements OnInit {
  form: FormGroup; 
  intervalsInfoRequest:IntervalsInfoRequest={};
  message:string;
  @Input()
  intervalsInfoResponse:IntervalsInfoResponse;
  constructor(private intervalsInfosrvice:IntervalsInfoService,private _formBuilder:FormBuilder) {
  
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      drivingMechanism:['', [Validators.required]],
      zones:['', [Validators.required]],
      interval:['', [Validators.required]],
      from:['', [Validators.required]],
      to:['', [Validators.required]],
      length:['', [Validators.required]],
      pr:['', [Validators.required]],
      tr:['', [Validators.required]],
      status:['', [Validators.required]],
      startDate:['', [Validators.required]],
      endDate:['', [Validators.required]],
      pi:['', [Validators.required]],
      mobility:['', [Validators.required]],
      fluidType:['', [Validators.required]],
      api:['', [Validators.required]],
      notes:['', [Validators.required]]
    });

   setTimeout(()=>{ }, 4000);
   console.log(this.intervalsInfoResponse);
   this.intervalsInfoRequest.api=this.intervalsInfoResponse.api;
   this.intervalsInfoRequest.drivingMechanism=this.intervalsInfoResponse.drivingMechanism;
   this.intervalsInfoRequest.endDate=this.intervalsInfoResponse.endDate;
   this.intervalsInfoRequest.fluidType=this.intervalsInfoResponse.fluidType;
   this.intervalsInfoRequest.from=this.intervalsInfoResponse.from;
   this.intervalsInfoRequest.interval=this.intervalsInfoResponse.interval;
   this.intervalsInfoRequest.length=this.intervalsInfoResponse.length;
   this.intervalsInfoRequest.mobility=this.intervalsInfoResponse.mobility;
   this.intervalsInfoRequest.notes=this.intervalsInfoResponse.notes;
   this.intervalsInfoRequest.pi=this.intervalsInfoResponse.pi;
   this.intervalsInfoRequest.pr=this.intervalsInfoResponse.pr;
   this.intervalsInfoRequest.startDate=this.intervalsInfoResponse.startDate;
   this.intervalsInfoRequest.status=this.intervalsInfoResponse.status;
   this.intervalsInfoRequest.to=this.intervalsInfoResponse.to;
   this.intervalsInfoRequest.tr=this.intervalsInfoResponse.tr;
   this.intervalsInfoRequest.wellId=this.intervalsInfoResponse.wellId;
   this.intervalsInfoRequest.zones=this.intervalsInfoResponse.zones;

  
  }
  

  update():void{
    let startDate = this.form.controls.startDate.value.split("-");
    this.intervalsInfoRequest.startDate=new Date(startDate[0],startDate[1],startDate[2]);
    let endDate = this.form.controls.endDate.value.split("-");
    this.intervalsInfoRequest.endDate=new Date(endDate[0],endDate[1],endDate[2]);
    this.intervalsInfosrvice.wellsIntervalsInfoIdPut(this.intervalsInfoRequest,this.intervalsInfoResponse.id).subscribe(
      Response=>{
        this.message="updated successfully";
      }
    )
  }
  

}
