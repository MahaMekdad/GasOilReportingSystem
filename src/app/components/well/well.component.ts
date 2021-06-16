import { Component, OnInit } from '@angular/core';
import { AllWellsResponse } from 'src/app/model/allWellsResponse';
import { WellService } from 'src/app/api/well.service';
@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {

  well: AllWellsResponse[]
  constructor(private _wellService: WellService) { }


  ngOnInit(): void {
    this._wellService.getwells(null, null).subscribe(
      data => {
        // console.log(data)
        this.well = data;
      }
    )
  }
  //
  // deleteFromWell(index: number) {
  //   let wel = this.well[index];
  //   this._wellService.deleteWellById(wel.wellId).subscribe(
  //     response => {
  //       this.well.splice(index, 1);
  //     },
  //     error => {
  //       alert(error.errorMessage);
  //     }
  //   );
  // }


}
