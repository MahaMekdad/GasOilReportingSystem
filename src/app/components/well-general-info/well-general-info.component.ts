import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { WellGeneralInfoService } from 'src/app/api/wellGeneralInfo.service';
import { WellGeneralInfoResponse } from 'src/app/model/wellGeneralInfoResponse';

@Component({
  selector: 'app-well-general-info',
  templateUrl: './well-general-info.component.html',
  styleUrls: ['./well-general-info.component.css']
})
export class WellGeneralInfoComponent implements OnInit {
  wellGeneralInfoResponse:WellGeneralInfoResponse;
  highlightedRow: number = -1;
  modalContent: NgbModalRef;
  wellIdToaddWellGeneralInfo:number=2;
  constructor(private wellGeneralInfoService:WellGeneralInfoService, private _modalService: NgbModal) { }
   
  ngOnInit(): void {
    this.loadRecords();
  }

 
  triggerModal(content) {
    this.modalContent = this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
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

  

  deleteFromWellGeneralInfo() {
    if(this.highlightedRow == -1 || this.highlightedRow == undefined){
      return;
    }
    this.wellGeneralInfoService.wellsGeneralInfoIdDelete(this.highlightedRow).subscribe(Response=>{
      this.wellGeneralInfoResponse=null;
    });
  }

  loadRecords(){
      //1>>>>wellId
      this.wellGeneralInfoService.wellsGeneralInfoIdGet(2).subscribe(Response =>{
        this.wellGeneralInfoResponse=Response;
     });
  }

  closePopUpAndRefreshTable(){
    this.modalContent.dismiss();
    this.loadRecords();
  }
}
