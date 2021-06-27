import { Component, OnInit, Input } from '@angular/core';
import { ProductionGeneralInfoService } from 'src/app/api/productionGeneralInfo.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProductionGeneralInfoResponse } from 'src/app/model/productionGeneralInfoResponse';

@Component({
  selector: 'app-production-general-info',
  templateUrl: './production-general-info.component.html',
  styleUrls: ['./production-general-info.component.css']
})
export class ProductionGeneralInfoComponent implements OnInit {

  @Input()
  id: number;
  @Input()
  concession: string;
  jobLocation: string = localStorage.getItem("jobLocation");
  userRole: string  =  localStorage.getItem("userRole");
  pgis: ProductionGeneralInfoResponse[]

  pgiToBeUpdated: ProductionGeneralInfoResponse;

  highlightedRow: number = -1;

  modalContent: NgbModalRef

  constructor(private _productionGeneralInfoService: ProductionGeneralInfoService, private _modalService: NgbModal) { }

  triggerModal(content) {
    this.modalContent = content;
    this.modalContent = this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
  }

  ngOnInit(): void {
    this.loadRecords()
  }

  loadRecords(){
    this._productionGeneralInfoService.wellsWellIdProductionGeneralInfoGet(this.id).subscribe(
      data => {
        this.pgis = data;
        // console.log(this.pgis)
      },
      error => {
        console.log(error.errorMessage);
      })
  }

  ClickedRowToDelete(index: number)
  {
    if(this.highlightedRow == index)
    {
      this.highlightedRow = -1;
      return;
    }
    this.highlightedRow = index;
  }

  ClickedRowToUpdate(index: number)
  {
    if(this.highlightedRow == -1 || this.highlightedRow == undefined){
      console.log("zzzzzzz")
      this.pgiToBeUpdated = null;
      return;
    }
    let x = this.pgis[this.highlightedRow];
    console.log(this.highlightedRow)
    console.log(x)
    this.pgiToBeUpdated = x;
    console.log(this.pgiToBeUpdated)
  }

  deleteFromFlms() {
    if(this.highlightedRow == -1 || this.highlightedRow == undefined){
      return;
    }
    let pgi = this.pgis[this.highlightedRow];
    this._productionGeneralInfoService.wellsWellIdProductionGeneralInfoPgiIdDelete(this.id, pgi.id).subscribe(
      response => {
        this.pgis.splice(this.highlightedRow, 1);
        this.highlightedRow = -1;
      },
      error => {
        console.log(error.errorMessage);
      }
    );
  }

  closePopUpAndRefreshTable(){
    this.modalContent.dismiss();
    this.loadRecords();
  }

}
