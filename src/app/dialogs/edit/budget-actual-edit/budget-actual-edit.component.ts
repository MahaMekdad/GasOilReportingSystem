import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConcessionsBudgetsService} from '../../../api/concessionsBudgets.service';
import {FormControl, Validators} from '@angular/forms';
import {ConcessionResponse} from '../../../model/concessionResponse';
import {HttpErrorResponse} from '@angular/common/http';
import {FieldsBudgetAndActualResponse} from '../../../model/fieldsBudgetAndActualResponse';
import {ConcessionRequest} from '../../../model/concessionRequest';
import {FieldsBudgetAndActualRequest} from '../../../model/fieldsBudgetAndActualRequest';

@Component({
  selector: 'app-budget-actual-edit',
  templateUrl: './budget-actual-edit.component.html',
  styleUrls: ['./budget-actual-edit.component.css']
})
export class BudgetActualEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BudgetActualEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public serviceReference: ConcessionsBudgetsService) {
  }

  // myUpdateBudgetRequest: FieldsBudgetAndActualRequest = {
  //   productionDate?: this.data.productionDate;
  //   meleihaBudget?: number;
  //   meleihaActual?: number;
  //   meleihaPercentage?: number;
  //   agharActual?: number;
  //   agharBudget?: number;
  //   agharPercentage?: number;
  //   eastKanaysActual?: number;
  //   eastKanaysBudget?: number;
  //   eastKanysPercentage?: number;
  //   zarifActual?: number;
  //   zarifBudget?: number;
  //   zarifPercentage?: number;
  //   farasActual?: number;
  //   farasBudget?: number;
  //   farasPercentage?: number;
  //   ramlActual?: number;
  //   ramlBudget?: number;
  //   ramlPercentage?: number;
  //   westernDesertActual?: number;
  //   westernDesertBudget?: number;
  //   westernDesertPercentage?: number;
  //   ashrafiActual?: number;
  //   ashrafiBudget?: number;
  //   ashrafiPercentage?: number;
  //   agibaOilActual?: number;
  //   agibaOilBudget?: number;
  //   agibaOilPercentage?: number;
  //   salesGasActual?: number;
  // };
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
    this.serviceReference.updateBudgetRecord(this.data.rowData.recordId, this.data.rowData).subscribe(
      (response: FieldsBudgetAndActualResponse) => {
        // console.log(response);
        // console.log(this.data.rowData.recordId);
        this.serviceReference.findAllRecords();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
