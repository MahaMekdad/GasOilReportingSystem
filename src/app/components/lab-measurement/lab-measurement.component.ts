import { Component, OnInit } from '@angular/core';
import { LabService } from 'src/app/api/lab.service';
import { AllLabs } from 'src/app/model/allLabs';
import { AllLabsOfAWell } from 'src/app/model/allLabsOfAWell';
import { LabMeasurementResponse } from 'src/app/model/labMeasurementResponse';

@Component({
  selector: 'app-lab-measurement',
  templateUrl: './lab-measurement.component.html',
  styleUrls: ['./lab-measurement.component.css']
})
export class LabMeasurementComponent implements OnInit {

  labs: LabMeasurementResponse[]


  constructor(private _labService: LabService) { }

  ngOnInit(): void {
    this._labService.getAllLabs(null, null).subscribe(
      data => {
        // console.log(data)
        this.labs= data;
      }
    )
  }

  deleteFromLabs(index: number) {
    let lab = this.labs[index];
    this._labService.deleteLabById(1,lab.id).subscribe(
      response => {
        this.labs.splice(index, 1);
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }

}
