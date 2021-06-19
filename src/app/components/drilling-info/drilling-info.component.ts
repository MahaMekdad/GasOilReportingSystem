import { Component, OnInit } from '@angular/core';
import {DrillingInfoDataResponse} from "../../model/drillingInfoDataResponse";
import {DrilingInfoService} from "../../api/drilingInfo.service";
import { DrillingInfoDataRequest } from 'src/app/model/drillingInfoDataRequest';


@Component({
  selector: 'app-drilling-info',
  templateUrl: './drilling-info.component.html',
  styleUrls: ['./drilling-info.component.css']
})
export class DrillingInfoComponent implements OnInit {


  drill: DrillingInfoDataResponse[]
  drillId: number;
  message:string= "";
  drillIdEdit: number;
  wellId: number;
  wellIdEdite: number;
  wellIdFilter: number;

  constructor(private _drilingInfoService: DrilingInfoService) { }


  ngOnInit(): void {
    this._drilingInfoService.wellsDrillingInfoGet(null, null).subscribe(
      data => {
        // console.log(data)
        this.drill = data;
      }
    )
  }

  deleteFromDrill(index: number) {
    let drill = this.drill[index];
    this._drilingInfoService.wellsWellIdDrillingInfoIdDelete(drill.wellId,drill.id,"body").subscribe(
      response => {
        this.drill.splice(index, 1);
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }

  r: DrillingInfoDataRequest={
    bbtp: 0.0,
    boreType: '',
    measuredDepth: 0.0,
    productionGeneralInfo: '',
    releaseDate: new Date(),
    wellDescription: '',
    tvdDepth: 0.0,
    wellType: ''

  };

  r2: DrillingInfoDataRequest={
    bbtp: 0.0,
    boreType: '',
    measuredDepth: 0.0,
    productionGeneralInfo: '',
    releaseDate: new Date(),
    wellDescription: '',
    tvdDepth: 0.0,
    wellType: ''
  };

  // filterById():void{
  //   this._wellService.getwellById(this.wellIdFilter,null, null).subscribe(
  //     data => {
  //       // console.log(data)
  //       this.well = data;
  //     }
  //   )
  // }


  insert():void{
    this._drilingInfoService.wellsWellIdDrillingInfoPost(this.r,this.wellId,null,null).subscribe( Response=>{
      this.message="Added";
    },error => {
      this.message=error.error.errorMessage;
      console.log(this.message);
    });
  }

  edit():void{
    this._drilingInfoService.wellsWellIdDrillingInfoIdPatch(this.r2,this.wellIdEdite,this.drillId,null,null).subscribe( Response=>{
      this.message="Edited";
    },error => {
      this.message=error.error.errorMessage;
      console.log(this.message);
    });
  }

}
