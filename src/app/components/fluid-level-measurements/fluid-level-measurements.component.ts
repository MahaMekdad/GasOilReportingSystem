import {Component, Input, OnInit} from '@angular/core';
import { FluidLevelMeasurementsService } from 'src/app/api/fluidLevelMeasurements.service';
import { AllFluidLevelMeasurementResponse } from 'src/app/model/allFluidLevelMeasurementResponse';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fluid-level-measurements',
  templateUrl: './fluid-level-measurements.component.html',
  styleUrls: ['./fluid-level-measurements.component.css']
})
export class FluidLevelMeasurementsComponent implements OnInit {
  @Input()
  id: number;
  flms: AllFluidLevelMeasurementResponse[]

  flmToBeUpdate: AllFluidLevelMeasurementResponse;

  highlightedRow: number = -1;

  modalContent: NgbModalRef

  totalRecords: number;

  page: number = 1;

  elements: number = 5;

  constructor(private _fluidLevelMeasurementsService: FluidLevelMeasurementsService, private _modalService: NgbModal) {
  }

  triggerModal(content) {
    this.modalContent = content;
    // console.log(content)
    this.modalContent = this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    // console.log(this.modalContent)
  }

  ngOnInit(): void {
    this.loadRecords()
    console.log("iddddd == " + this.id);

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
      this.flmToBeUpdate = null;
      return;
    }
    let x = this.flms[this.highlightedRow];
    this.flmToBeUpdate = x;
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
        console.log(error);
      }
    );
  }

  loadRecords(){
    this._fluidLevelMeasurementsService.wellsWellIdFluidLevelMeasurementsGet(this.id).subscribe(
      data => {
        this.totalRecords = data.length;
        // console.log(this.totalRecords)
      },
      error => {
        console.log(error);
      });
    this._fluidLevelMeasurementsService.wellsWellIdFluidLevelMeasurementsGet(this.id ,this.page-1, this.elements).subscribe(
      data => {
        this.flms = data;
      },
      error => {
        console.log(error);
      });
  }

  closePopUpAndRefreshTable(){
    this.modalContent.dismiss();
    this.loadRecords();
  }

  updateDataArray(){
    this.highlightedRow = -1;
    console.log("SOS!")
    this._fluidLevelMeasurementsService.wellsWellIdFluidLevelMeasurementsGet(this.id, this.page-1, this.elements).subscribe(
      data => {
        this.flms = data;
      },
      error => {
        console.log(error);
      })
  }
}
