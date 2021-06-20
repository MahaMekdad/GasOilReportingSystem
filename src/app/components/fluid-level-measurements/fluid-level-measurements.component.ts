import { Component, OnInit } from '@angular/core';
import { FluidLevelMeasurementsService } from 'src/app/api/fluidLevelMeasurements.service';
import { AllFluidLevelMeasurementResponse } from 'src/app/model/allFluidLevelMeasurementResponse';

@Component({
  selector: 'app-fluid-level-measurements',
  templateUrl: './fluid-level-measurements.component.html',
  styleUrls: ['./fluid-level-measurements.component.css']
})
export class FluidLevelMeasurementsComponent implements OnInit {

  flms: AllFluidLevelMeasurementResponse[]

  highlightedRow: number

  constructor(private _fluidLevelMeasurementsService: FluidLevelMeasurementsService) { }

  ngOnInit(): void {
    this._fluidLevelMeasurementsService.wellsFluidLevelMeasurementsGet(null, null).subscribe(
      data => {
        // console.log(data)
        this.flms = data;
      }
    )
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

}
