import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {WellTestsService} from '../../../api/wellTests.service';
import {WellTestResponse} from '../../../model/wellTestResponse';

@Component({
  selector: 'app-well-test-edit',
  templateUrl: './well-test-edit.component.html',
  styleUrls: ['./well-test-edit.component.css']
})
export class WellTestEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WellTestEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public serviceReference: WellTestsService) {
  }

  ngOnInit(): void {
  }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.serviceReference.updateWellTestRecord(this.data.rowData, 1, this.data.rowData.recordId).subscribe(
      (response: WellTestResponse) => {
        console.log('---------------------');
        console.log(this.data.productionDate);
        console.log(response);
        console.log(this.data.rowData.recordId);
        this.serviceReference.findAllTests();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
