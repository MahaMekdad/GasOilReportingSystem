import { Component, OnInit } from '@angular/core';
import { AllWellsResponse } from 'src/app/model/allWellsResponse';
import { WellService } from 'src/app/api/well.service';
import { WellRequest } from 'src/app/model/wellRequest';
@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {

  well: AllWellsResponse[]
  wellId: number;
  message:string="";
  wellIdEdit: number;
  wellIdFilter: number;


  constructor(private _wellService: WellService) { }


  ngOnInit(): void {
    this._wellService.getwells(null, null).subscribe(
      data => {
        // console.log(data)
        this.well = data;
      }
    )
  }

  deleteFromwell(index: number) {
    let wel = this.well[index];
    this._wellService.deleteWellById(wel.wellId).subscribe(
      response => {
        this.well.splice(index, 1);
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }
  r: WellRequest={
    wellName: 'write here',
    fieldId: 0.0
  };

  r2: WellRequest={
    wellName: 'write here',
    fieldId: 0.0
  };

  // filterById():void{
  //   this._wellService.getwellById(this.wellIdFilter,null, null).subscribe(
  //     data => {
  //       // console.log(data)
  //       this.well = data;
  //     }
  //   )
  // }



  filterById():void{
    this._wellService.getwellById(this.wellIdFilter,null, null).subscribe(
      data => {
        // console.log(data)
        this.well[0]= data;

      }
    )
    for(var counter:number = 1; counter<this.well.length; counter++){
      delete (this.well[counter]);
    }
  }



  insert():void{
    this._wellService.addwell(this.r).subscribe( Response=>{
      this.message="Added";
    },error => {
      this.message=error.error.errorMessage;
      console.log(this.message);
    });
  }

  edit():void{
    this._wellService.updateWell(this.r2,this.wellIdEdit,null,null).subscribe( Response=>{
      this.message="Edited";
    },error => {
      this.message=error.error.errorMessage;
      console.log(this.message);
    });
  }


}
