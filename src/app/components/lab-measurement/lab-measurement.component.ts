import { Component, OnInit } from '@angular/core';
import { LabService } from 'src/app/api/lab.service';
import { AllLabs } from 'src/app/model/allLabs';
import { AllLabsOfAWell } from 'src/app/model/allLabsOfAWell';
import { LabMeasurementRequest } from 'src/app/model/labMeasurementRequest';
import { LabMeasurementResponse } from 'src/app/model/labMeasurementResponse';

@Component({
  selector: 'app-lab-measurement',
  templateUrl: './lab-measurement.component.html',
  styleUrls: ['./lab-measurement.component.css']
})
export class LabMeasurementComponent implements OnInit {

  labs: LabMeasurementResponse[]
  wellFilter: number;
  labF: number;
  startDate: string;
  endDate: string;
  id: number;
  wellId: number;
  message:string="";
  LabIdDelete: number;
  checkbox1 :number;
  LabIdD: number;
  accepted: Boolean = false;
  isChecked: Boolean = true;



  constructor(private _labService: LabService) { }

  ngOnInit(): void {
    this._labService.getAllLabs(null, null).subscribe(
      data => {
        // console.log(data)
        this.labs= data;
      }
    )
  }

  l: LabMeasurementRequest={
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0,
    s5: 0,
    remarks: "write here",
    date: new Date()
      };

      l2: LabMeasurementRequest={
        s1: 0,
        s2: 0,
        s3: 0,
        s4: 0,
        s5: 0,
        remarks: "write here",
        date: new Date()
          };
 
  filterByDate():void{
    this._labService.getAllLabs(this.startDate,this.endDate).subscribe(
      data => {
        // console.log(data)
        this.labs= data;
      }
  )
  }
  
  filterByWellAndLab():void{
    this._labService.getLabByWellIdAndLabId(1,this.labF).subscribe(
      data => {
        // console.log(data)
        this.labs[0]= data;
        
      }
    )
    for(var counter:number = 1; counter<this.labs.length; counter++){
      delete (this.labs[counter]);
  }
  }
  
  filterById():void{
    this._labService.getAllLabsInWell(this.wellFilter,null,null).subscribe(
      data => {
        // console.log(data)
        
        this.labs= data;
      }
  )
  }

  insert():void{
    this._labService.addLabMeasurement(this.l,this.id).subscribe( Response=>{
      this.message="Added";
    },error => {
      this.message=error.error.errorMessage;
      console.log(this.message);
    });
  }

  edit(index: number){
    let lab = this.labs[index];
    this._labService.updateLabMeasurement(this.l2,1,lab.id).subscribe( Response=>{
      this.message="Edited";
    },error => {
      this.message=error.error.errorMessage;
      console.log(this.message);
    });
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

  equal(index: number) {
this.LabIdD=index;
  }


}
