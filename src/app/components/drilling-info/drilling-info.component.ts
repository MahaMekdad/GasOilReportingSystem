import { Component, OnInit } from '@angular/core';
import {DrillingInfoDataResponse} from "../../model/drillingInfoDataResponse";
import {DrilingInfoService} from "../../api/drilingInfo.service";
import { DrillingInfoDataRequest } from 'src/app/model/drillingInfoDataRequest';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";


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
  HighlightRow: number;
  window: NgbModalRef;
  drillingUpdate: DrillingInfoDataResponse;

  constructor(private _drilingInfoService: DrilingInfoService , private modalService: NgbModal) { }


  ngOnInit(): void {
    this._drilingInfoService.wellsDrillingInfoGet(null, null).subscribe(
      data => {
        // console.log(data)
        this.drill = data;
      }
    )
  }
  ClickedRowToUpdate(index: number)
  {
    if(this.HighlightRow == -1 || this.HighlightRow == undefined){
      this.drillingUpdate = null;
      return;
    }
    let x = this.drill[this.HighlightRow];
    this.drillingUpdate = x;
  }
  ClickedRow(index:number)
  {
    if(this.HighlightRow == index)
    {
      this.HighlightRow = -1;
      return;
    }
    this.HighlightRow = index;
  }
  triggerModal(content) {
    this.window = content;
    this.window = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});

  }
  delete(){
    let drill = this.drill[this.HighlightRow];
    this._drilingInfoService.wellsWellIdDrillingInfoIdDelete(drill.wellId,drill.id,"body").subscribe(
      response => {
        this.drill.splice(this.HighlightRow, 1);
        this.HighlightRow = -1;
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
  loadRecords(){
    this._drilingInfoService.wellsDrillingInfoGet().subscribe(
      data => {
        this.drill = data;
      })
  }
  closePopUpAndRefreshTable(){
    this.window.dismiss();
    this.loadRecords();
  }
}
