import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WellTestsService} from '../../../api/wellTests.service';
import {FormControl, Validators} from '@angular/forms';
import {ConcessionResponse} from '../../../model/concessionResponse';
import {HttpErrorResponse} from '@angular/common/http';
import {WellTestResponse} from '../../../model/wellTestResponse';
import {WellTestRequest} from '../../../model/wellTestRequest';

@Component({
  selector: 'app-well-test-add',
  templateUrl: './well-test-add.component.html',
  styleUrls: ['./well-test-add.component.css']
})
export class WellTestAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<WellTestAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: WellTestRequest,
    public wellTestService: WellTestsService
  ) {
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  ngOnInit(): void {
  }

  public stopEdit(): void {
    this.wellTestService.addTestRecord(this.data, 1).subscribe(
      (response: WellTestResponse) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    console.log('printing from the submit method');
    // do nothing
  }

}
