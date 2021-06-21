import { Component, OnInit } from '@angular/core';
import { FluidLevelMeasurementsService } from 'src/app/api/fluidLevelMeasurements.service';
import { AllFluidLevelMeasurementResponse } from 'src/app/model/allFluidLevelMeasurementResponse';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-fluid-level-measurements',
  templateUrl: './fluid-level-measurements.component.html',
  styleUrls: ['./fluid-level-measurements.component.css']
})
export class FluidLevelMeasurementsComponent implements OnInit {

  flms: AllFluidLevelMeasurementResponse[]

  highlightedRow: number

  modalContent: NgbModalRef

  constructor(private _fluidLevelMeasurementsService: FluidLevelMeasurementsService, private _modalService: NgbModal) { }

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

  deleteFromFlms() {
    if(this.highlightedRow == -1 || this.highlightedRow == undefined){
      return;
    }
    let flm = this.flms[this.highlightedRow];
    this._fluidLevelMeasurementsService.wellsWellIdFluidLevelMeasurementsFlmIdDelete(flm.wellId, flm.id).subscribe(
      response => {
        this.flms.splice(this.highlightedRow, 1);
        this.highlightedRow = -1;
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }

  loadRecords(){
    this._fluidLevelMeasurementsService.wellsFluidLevelMeasurementsGet(null, null).subscribe(
      data => {
        this.flms = data;
      })
  }

  closePopUpAndRefreshTable(){
    this.modalContent.dismiss();
    this.loadRecords();
  }
}
