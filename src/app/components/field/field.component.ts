import { Component, OnInit } from '@angular/core';
import { AllFieldsResponse } from 'src/app/model/allFieldsResponse';
import { FieldService } from 'src/app/api/field.service';
@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {


  field: AllFieldsResponse[]
  constructor(private _fieldService: FieldService) { }


  ngOnInit(): void {
    this._fieldService.getfields(null, null).subscribe(
      data => {
        // console.log(data)
        this.field = data;
      }
    )
  }

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


}
