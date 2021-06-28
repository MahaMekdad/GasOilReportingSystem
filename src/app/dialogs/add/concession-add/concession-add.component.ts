import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConcessionRequest} from '../../../model/concessionRequest';
import {ConcessionsService} from '../../../api/concessions.service';
import {ConcessionResponse} from '../../../model/concessionResponse';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-concession-add',
  templateUrl: './concession-add.component.html',
  styleUrls: ['./concession-add.component.css']
})
export class ConcessionAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConcessionAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConcessionRequest,
    public concessionService: ConcessionsService) {}

  ngOnInit(): void {
  }

  formControl = new FormControl('', [
    Validators.required
    // validator.email
  ]);

  public confirmAdd(): void {
    // console.log('concession Name' + this.data.name);
    this.concessionService.addConcession(this.data).subscribe(
      (response: ConcessionResponse) => {
        // console.log(response);
      },
      (error: HttpErrorResponse) => {
        // alert(error.message);
      }
    );
  }

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    // console.log('printing from the submit method');
    // do nothing
  }
}
