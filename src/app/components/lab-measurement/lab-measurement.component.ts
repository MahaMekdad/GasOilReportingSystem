import {Component, Input, OnInit} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LabMeasurementResponse } from 'src/app/model/labMeasurementResponse';
import { LabService } from 'src/app/api/lab.service';

@Component({
  selector: 'app-lab-measurement',
  templateUrl: './lab-measurement.component.html',
  styleUrls: ['./lab-measurement.component.css']
})
export class LabMeasurementComponent implements OnInit {
  @Input()
  id: number;

  @Input()
  concession: string;

  jobLocation: string = localStorage.getItem("jobLocation");

  role: string = localStorage.getItem("userRole");

  config: any;

  labs: LabMeasurementResponse[]

  labToBeUpdate: LabMeasurementResponse;

  highlightedRow: number = -1;

  modalContent: NgbModalRef

  constructor(private _labService: LabService, private _modalService: NgbModal) {

    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: this.labs
    };
  }

  triggerModal(content) {
    this.modalContent = content;
    this.modalContent = this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
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
      this.labToBeUpdate = null;
      return;
    }
    let x = this.labs[this.highlightedRow];
    this.labToBeUpdate = x;
  }

  deleteFromLabs() {
    if(this.highlightedRow == -1 || this.highlightedRow == undefined){
      return;
    }
    let lab = this.labs[this.highlightedRow];
    this._labService.deleteLabById(1, lab.id).subscribe(
      response => {
        this.labs.splice(this.highlightedRow, 1);
        this.highlightedRow = -1;
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }

  loadRecords(){
    this._labService.getAllLabsInWell(this.id).subscribe(
      data => {
        this.labs = data;
      })
  }

  closePopUpAndRefreshTable(){
    this.modalContent.dismiss();
    this.loadRecords();
  }
  pageChanged(event){
    this.highlightedRow = -1;
    this.config.currentPage = event;
  }

}
