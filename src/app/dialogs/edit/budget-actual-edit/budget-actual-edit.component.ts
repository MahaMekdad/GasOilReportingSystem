import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConcessionsBudgetsService} from '../../../api/concessionsBudgets.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-budget-actual-edit',
  templateUrl: './budget-actual-edit.component.html',
  styleUrls: ['./budget-actual-edit.component.css']
})
export class BudgetActualEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BudgetActualEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public serviceReference: ConcessionsBudgetsService) { }

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
    this.serviceReference.updateBudgetRecord(this.data.data);
  }

}
