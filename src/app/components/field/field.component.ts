import { Component, OnInit } from '@angular/core';
import { AllFieldsResponse } from 'src/app/model/allFieldsResponse';
import { FieldService } from 'src/app/api/field.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  role: string = localStorage.getItem("userRole");

  fields: AllFieldsResponse[]

  fieldToBeUpdate: AllFieldsResponse;

  highlightedRow: number = -1;

  modalContent: NgbModalRef

  constructor(private _fieldService: FieldService, private _modalService: NgbModal) { }

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
      this.fieldToBeUpdate = null;
      return;
    }
    let x = this.fields[this.highlightedRow];
    this.fieldToBeUpdate = x;
  }

  deleteFromfields() {
    if(this.highlightedRow == -1 || this.highlightedRow == undefined){
      return;
    }
    let field = this.fields[this.highlightedRow];
    this._fieldService.deletefieldById(field.fieldId).subscribe(
      response => {
        this.fields.splice(this.highlightedRow, 1);
        this.highlightedRow = -1;
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }

  loadRecords(){
    this._fieldService.getfields(null, null).subscribe(
      data => {
        this.fields = data;
      })
  }

  closePopUpAndRefreshTable(){
    this.modalContent.dismiss();
    this.loadRecords();
  }






  // fieldId: number;
  // message:string="";
  // fieldIdEdit: number;
  // fieldIdFilter: number;
  // constructor(private _fieldService: FieldService) { }
  //
  // r: FieldRequest={
  //   fieldName: '',
  //   concessionId: 0.0
  // };
  //
  // r2: FieldRequest={
  //   fieldName: '',
  //   concessionId: 0.0
  // };
  // ngOnInit(): void {
  //   this._fieldService.getfields(null, null).subscribe(
  //     data => {
  //       // console.log(data)
  //       this.field = data;
  //     }
  //   )
  // }
  //
  //
  // deleteFromField(index: number) {
  //   let fild = this.field[index];
  //   this._fieldService.deletefieldById(fild.fieldId).subscribe(
  //     response => {
  //       this.field.splice(index, 1);
  //     },
  //     error => {
  //       alert(error.errorMessage);
  //     }
  //   );
  // }
  //
  // filterById():void{
  //   this._fieldService.getfieldById(this.fieldIdFilter,null,null).subscribe(
  //     data => {
  //       // console.log(data)
  //       this.field[0]= data;
  //
  //     }
  //   )
  //   for(var counter:number = 1; counter<this.field.length; counter++){
  //     delete (this.field[counter]);
  //   }
  // }
  //
  // insert():void{
  //   this._fieldService.addfieldMeasurement(this.r,null,null).subscribe( Response=>{
  //     this.message="Added";
  //   },error => {
  //     this.message=error.error.errorMessage;
  //     console.log(this.message);
  //   });
  // }
  //
  // edit():void{
  //   this._fieldService.updatefieldMeasurement(this.r2,this.fieldIdEdit,null,null).subscribe( Response=>{
  //     this.message="Edited";
  //   },error => {
  //     this.message=error.error.errorMessage;
  //     console.log(this.message);
  //   });
  // }
  //
  //

}
