import { Component, OnInit } from '@angular/core';
import { AllFieldsResponse } from 'src/app/model/allFieldsResponse';
import { FieldService } from 'src/app/api/field.service';
import {FieldRequest} from "../../model/fieldRequest";
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {


  field: AllFieldsResponse[]
  fieldId: number;
  message:string="";
  fieldIdEdit: number;
  fieldIdFilter: number;
  constructor(private _fieldService: FieldService) { }

  r: FieldRequest={
    fieldName: '',
    concessionId: 0.0
  };

  r2: FieldRequest={
    fieldName: '',
    concessionId: 0.0
  };
  ngOnInit(): void {
    this._fieldService.getfields(null, null).subscribe(
      data => {
        // console.log(data)
        this.field = data;
      }
    )
  }


  deleteFromField(index: number) {
    let fild = this.field[index];
    this._fieldService.deletefieldById(fild.fieldId).subscribe(
      response => {
        this.field.splice(index, 1);
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }

  filterById():void{
    this._fieldService.getfieldById(this.fieldIdFilter,null,null).subscribe(
      data => {
        // console.log(data)
        this.field[0]= data;

      }
    )
    for(var counter:number = 1; counter<this.field.length; counter++){
      delete (this.field[counter]);
    }
  }

  insert():void{
    this._fieldService.addfieldMeasurement(this.r,null,null).subscribe( Response=>{
      this.message="Added";
    },error => {
      this.message=error.error.errorMessage;
      console.log(this.message);
    });
  }

  edit():void{
    this._fieldService.updatefieldMeasurement(this.r2,this.fieldIdEdit,null,null).subscribe( Response=>{
      this.message="Edited";
    },error => {
      this.message=error.error.errorMessage;
      console.log(this.message);
    });
  }



}
