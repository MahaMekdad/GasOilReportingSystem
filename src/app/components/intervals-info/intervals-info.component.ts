import {Component, Input, OnInit} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IntervalsInfoService } from 'src/app/api/intervalsInfo.service';
import { IntervalsInfoResponse } from 'src/app/model/intervalsInfoResponse';

@Component({
  selector: 'app-intervals-info',
  templateUrl: './intervals-info.component.html',
  styleUrls: ['./intervals-info.component.css']
})
export class IntervalsInfoComponent implements OnInit {
  @Input()
  id: number;
  intervalsInfoResponseList:IntervalsInfoResponse[];
  wellIdSelected:number=1;
  highlightedRow: number = -1;
  modalContent: NgbModalRef;

  constructor(private intervalsInfoService:IntervalsInfoService, private _modalService: NgbModal) { }

  ngOnInit(): void {
      this.wellIdSelected = this.id;
      this.loadRecords(this.wellIdSelected);
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


    deleteFromIntervalsInfo() {
      if(this.highlightedRow == -1 || this.highlightedRow == undefined){
        return;
      }
      this.intervalsInfoService.wellsIntervalsInfoIdDelete(this.intervalsInfoResponseList[this.highlightedRow].id).subscribe(Response=>{
        this.loadRecords(this.intervalsInfoResponseList[0].wellId);
     });
    }

    loadRecords(wellIdSelected:number){

        this.intervalsInfoService.wellsIntervalsInfoIdGet(wellIdSelected).subscribe(Response =>{
          this.intervalsInfoResponseList=Response;
       });
    }

    closePopUpAndRefreshTable(){
      this.modalContent.dismiss();
      this.loadRecords(this.wellIdSelected);
    }
}
