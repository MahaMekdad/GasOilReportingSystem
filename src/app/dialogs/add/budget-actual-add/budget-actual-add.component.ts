import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConcessionsBudgetsService} from '../../../api/concessionsBudgets.service';
import {FormControl, Validators} from '@angular/forms';
import {FieldsBudgetAndActualResponse} from '../../../model/fieldsBudgetAndActualResponse';
import {HttpErrorResponse} from '@angular/common/http';
import {FieldsBudgetAndActualRequest} from '../../../model/fieldsBudgetAndActualRequest';

@Component({
  selector: 'app-budget-actual-add',
  templateUrl: './budget-actual-add.component.html',
  styleUrls: ['./budget-actual-add.component.css']
})
export class BudgetActualAddComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BudgetActualAddComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public serviceReference: ConcessionsBudgetsService) {
  }

  myUpdateBudgetRequest: FieldsBudgetAndActualRequest = {
    productionDate: this.data.rowData.productionDate,
    meleihaBudget: this.data.rowData.meleihaBudget,
    meleihaActual: this.data.rowData.meleihaActual,
    // meleihaPercentage: this.data.rowData.meleihaPercentage;
    agharActual: this.data.rowData.agharActual,
    agharBudget: this.data.rowData.agharBudget,
    // agharPercentage: this.data.rowData.agharPercentage;
    eastKanaysActual: this.data.rowData.eastKanaysActual,
    eastKanaysBudget: this.data.rowData.eastKanaysBudget,
    // eastKanysPercentage: this.data.rowData.eastKanysPercentage;
    zarifActual: this.data.rowData.zarifActual,
    zarifBudget: this.data.rowData.zarifBudget,
    // zarifPercentage: this.data.rowData.zarifPercentage;
    farasActual: this.data.rowData.farasActual,
    farasBudget: this.data.rowData.farasBudget,
    // farasPercentage: this.data.rowData.farasPercentage;
    ramlActual: this.data.rowData.ramlActual,
    ramlBudget: this.data.rowData.ramlBudget,
    // ramlPercentage: this.data.rowData.ramlPercentage;
    westernDesertActual: this.data.rowData.westernDesertActual,
    westernDesertBudget: this.data.rowData.westernDesertBudget,
    // westernDesertPercentage: this.data.rowData.westernDesertPercentage;
    ashrafiActual: this.data.rowData.ashrafiActual,
    ashrafiBudget: this.data.rowData.ashrafiBudget,
    // ashrafiPercentage: this.data.rowData.ashrafiPercentage;
    agibaOilActual: this.data.rowData.agibaOilActual,
    agibaOilBudget: this.data.rowData.agibaOilBudget,
    // agibaOilPercentage: this.data.rowData.agibaOilPercentage;
    // salesGasActual: this.data.rowData.salesGasActual;
  };
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
    this.serviceReference.addBudgetRecord(this.data.rowData).subscribe(
      (response: FieldsBudgetAndActualResponse) => {
        console.log(response);
        console.log(this.data.rowData.recordId);
        this.serviceReference.findAllRecords();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
