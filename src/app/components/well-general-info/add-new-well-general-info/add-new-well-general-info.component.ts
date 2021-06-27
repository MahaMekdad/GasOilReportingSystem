import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WellGeneralInfoService } from 'src/app/api/wellGeneralInfo.service';
import { WellGeneralInfoRequest } from 'src/app/model/wellGeneralInfoRequest';

@Component({
  selector: 'app-add-new-well-general-info',
  templateUrl: './add-new-well-general-info.component.html',
  styleUrls: ['./add-new-well-general-info.component.css']
})
export class AddNewWellGeneralInfoComponent implements OnInit {
  form: FormGroup;
  @Input()
  wellIdToaddWellGeneralInfo:number;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  constructor(private wellGeneralInfosrvice:WellGeneralInfoService,private _formBuilder:FormBuilder) { }

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
  }

  insert():void{
    let wellGeneralInfoRequest: WellGeneralInfoRequest = this.form.value as WellGeneralInfoRequest
    wellGeneralInfoRequest.wellId=this.wellIdToaddWellGeneralInfo;
   console.log(wellGeneralInfoRequest);
    this.wellGeneralInfosrvice.wellsGeneralInfoPost(wellGeneralInfoRequest).subscribe(Response=>{
            console.log("good");
            this.closeModal.emit();
    },
    error=>{
      console.log(error)
    }
    );

  }
}
