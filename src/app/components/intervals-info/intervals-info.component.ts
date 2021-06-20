import { Component, OnInit } from '@angular/core';
import { IntervalsInfoService } from 'src/app/api/intervalsInfo.service';
import { IntervalsInfoResponse } from 'src/app/model/intervalsInfoResponse';

@Component({
  selector: 'app-intervals-info',
  templateUrl: './intervals-info.component.html',
  styleUrls: ['./intervals-info.component.css']
})
export class IntervalsInfoComponent implements OnInit {
  intervalsInfoResponseList:IntervalsInfoResponse[];
  constructor(private intervalsInfoService:IntervalsInfoService) { }

  ngOnInit(): void {
    this.refreshIntervalsInfoList(1);
  }

   deleteIntervalsInfo(id:number):void{
      this.intervalsInfoService.wellsIntervalsInfoIdDelete(id).subscribe(Response=>{
         this.refreshIntervalsInfoList(this.intervalsInfoResponseList[0].wellId);
      });
    }

    refreshIntervalsInfoList(wellId:number):void{
      this.intervalsInfoService.wellsIntervalsInfoIdGet(1).subscribe(Response =>{
        this.intervalsInfoResponseList=Response;
     });
    }
}
