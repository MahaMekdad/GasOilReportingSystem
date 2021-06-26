import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConcessionsService} from '../../../api/concessions.service';
import {ConcessionRequest} from '../../../model/concessionRequest';
import {ConcessionResponse} from '../../../model/concessionResponse';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-concession-edit',
  templateUrl: './concession-edit.component.html',
  styleUrls: ['./concession-edit.component.css']
})
export class ConcessionEditComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ConcessionEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public concessionService: ConcessionsService) {
  }

  myConcessionRequest: ConcessionRequest = {
    name: this.data.name
  };

  const;
  MyModal: ConRequest = new ConRequest('allaa');

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  ngOnInit(): void {

  }

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
    console.log('debugging 2 :----------');

    console.log('name: ' + this.data.name);
    console.log('id: ' + this.data.id);
    this.concessionService.updateConcession(this.data, this.data.id).subscribe(
      (response: ConcessionResponse) => {
        console.log(response);
        this.concessionService.findAllConcessions();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}


class ConRequest implements ConcessionRequest {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}
