import { Component, OnInit } from '@angular/core';
import { WellGeneralInfoService } from 'src/app/api/wellGeneralInfo.service';
import { WellGeneralInfoResponse } from 'src/app/model/wellGeneralInfoResponse';

@Component({
  selector: 'app-well-general-info',
  templateUrl: './well-general-info.component.html',
  styleUrls: ['./well-general-info.component.css']
})
export class WellGeneralInfoComponent implements OnInit {
  wellGeneralInfoResponse:WellGeneralInfoResponse;
  constructor(private wellGeneralInfoService:WellGeneralInfoService) { }
   
  ngOnInit(): void {
      //1>>>>wellId
      this.wellGeneralInfoService.wellsGeneralInfoIdGet(2).subscribe(Response =>{
         this.wellGeneralInfoResponse=Response;
      });
  }

  deleteWellGeneralInfo(wellGeneralInfoId:number):void{
      this.wellGeneralInfoService.wellsGeneralInfoIdDelete(wellGeneralInfoId).subscribe(Response=>{
        this.wellGeneralInfoResponse=null;
      });
  }

}
