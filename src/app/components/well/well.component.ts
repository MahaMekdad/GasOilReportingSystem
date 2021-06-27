import { Component, OnInit } from '@angular/core';
import { AllWellsResponse } from 'src/app/model/allWellsResponse';
import { WellService } from 'src/app/api/well.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {

  role: string = localStorage.getItem("userRole");

  wells: AllWellsResponse[]

  wellToBeUpdate: AllWellsResponse;

  highlightedRow: number = -1;

  modalContent: NgbModalRef

  constructor(private _wellService: WellService, private _modalService: NgbModal) { }

  triggerModal(content) {
    this.modalContent = content;
    // console.log(content)
    this.modalContent = this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    // console.log(this.modalContent)
  }

  ngOnInit(): void {
    this.loadRecords()
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
      this.wellToBeUpdate = null;
      return;
    }
    let x = this.wells[this.highlightedRow];
    this.wellToBeUpdate = x;
  }

  deleteFromwell() {
    if(this.highlightedRow == -1 || this.highlightedRow == undefined){
      return;
    }
    let well = this.wells[this.highlightedRow];
    this._wellService.deleteWellById(well.wellId,null,null).subscribe(
      response => {
        this.wells.splice(this.highlightedRow, 1);
        this.highlightedRow = -1;
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }

  loadRecords(){
    this._wellService.getwells(null, null).subscribe(
      data => {
        this.wells = data;
      })
  }

  closePopUpAndRefreshTable(){
    this.modalContent.dismiss();
    this.loadRecords();
  }
}
