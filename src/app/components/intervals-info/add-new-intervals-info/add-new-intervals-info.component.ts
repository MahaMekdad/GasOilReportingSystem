import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IntervalsInfoService } from 'src/app/api/intervalsInfo.service';
import { IntervalsInfoRequest } from 'src/app/model/intervalsInfoRequest';

@Component({
  selector: 'app-add-new-intervals-info',
  templateUrl: './add-new-intervals-info.component.html',
  styleUrls: ['./add-new-intervals-info.component.css']
})
export class AddNewIntervalsInfoComponent implements OnInit {

  form: FormGroup;
  @Input()
  wellIdSelected:number;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private intervalsInfoService:IntervalsInfoService,private _formBuilder:FormBuilder) { }

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
  }

 
  

 

  insert():void{
    let intervalsInfoRequest: IntervalsInfoRequest = this.form.value as IntervalsInfoRequest;
    intervalsInfoRequest.wellId=this.wellIdSelected;
    let startDate = this.form.controls.startDate.value.split("-");
    intervalsInfoRequest.startDate=new Date(startDate[0],startDate[1],startDate[2]);
    let endDate = this.form.controls.endDate.value.split("-");
    intervalsInfoRequest.endDate=new Date(endDate[0],endDate[1],endDate[2]);
   console.log(intervalsInfoRequest);
    this.intervalsInfoService.wellsIntervalsInfoPost(intervalsInfoRequest).subscribe(Response=>{
            // console.log("good");
            this.closeModal.emit();

    },
    error=>{
      // console.log(error)
    }
    );

  }
}
