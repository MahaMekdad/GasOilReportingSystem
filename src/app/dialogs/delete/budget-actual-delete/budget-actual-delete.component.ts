import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import {FieldsBudgetAndActualResponse} from '../../../model/fieldsBudgetAndActualResponse';
import {BudgetActualAddComponent} from '../../add/budget-actual-add/budget-actual-add.component';
import {ConcessionsBudgetsService} from '../../../api/concessionsBudgets.service';

@Component({
  selector: 'app-budget-actual-delete',
  templateUrl: './budget-actual-delete.component.html',
  styleUrls: ['./budget-actual-delete.component.css']
})
export class BudgetActualDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BudgetActualAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public serviceReference: ConcessionsBudgetsService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.serviceReference.deleteRecord(this.data.index).subscribe(
      (response: FieldsBudgetAndActualResponse) => {
        console.log(response);
        this.serviceReference.findAllRecords();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
