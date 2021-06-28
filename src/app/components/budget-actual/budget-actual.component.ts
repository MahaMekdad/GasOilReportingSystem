import {Component, OnInit} from '@angular/core';
import {ConcessionsBudgetsService} from '../../api/concessionsBudgets.service';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import {FieldsBudgetAndActualResponse} from '../../model/fieldsBudgetAndActualResponse';
import {BudgetActualDeleteComponent} from '../../dialogs/delete/budget-actual-delete/budget-actual-delete.component';
import {BudgetActualAddComponent} from '../../dialogs/add/budget-actual-add/budget-actual-add.component';
import {BudgetActualEditComponent} from '../../dialogs/edit/budget-actual-edit/budget-actual-edit.component';
import {BudgetActualChComponent} from '../../charts/budget-actual-ch/budget-actual-ch.component';

@Component({
  selector: 'app-budget-actual',
  templateUrl: './budget-actual.component.html',
  styleUrls: ['./budget-actual.component.css']
})
export class BudgetActualComponent implements OnInit {
  public dataSource: FieldsBudgetAndActualResponse[];
  index: number;
  id: number;
  displayedColumns = [
    'productionDate',
    'Meleiha Actual', 'Meleiha Budget', 'Meleiha Percentage',
    'agharActual', 'agharBudget', 'agharPercentage',
    'eastKanaysActual', 'eastKanaysBudget', 'eastKanysPercentage',
    'zarifActual', 'zarifBudget', 'zarifPercentage',
    'farasActual', 'farasBudget', 'farasPercentage',
    'ramlActual', 'ramlBudget', 'ramlPercentage',
    'westernDesertActual', 'westernDesertBudget', 'westernDesertPercentage',
    'ashrafiActual', 'ashrafiBudget', 'ashrafiPercentage',
    'agibaOilActual', 'agibaOilBudget',
    'Actions'];

  constructor(
    private budgetActualService: ConcessionsBudgetsService,
    private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.findAll();
  }

  // get all records
  private findAll() {
    this.budgetActualService.findAllRecords().subscribe(
      (response: FieldsBudgetAndActualResponse[]) => {
        this.dataSource = response;
        // console.log(response);
      },
      (error: HttpErrorResponse) => {
        // alert(error.message);
      }
    );
  }

  addNew(productionDate: string,
         meleihaActual: number, meleihaBudget: number, agharActual: number, agharBudget: number,
         eastKanaysActual: number, eastKanaysBudget: number, zarifActual: number, zarifBudget: number,
         farasActual: any, farasBudget: number, ramlActual: number, ramlBudget: number,
         westernDesertActual: number, westernDesertBudget: number, ashrafiActual: number, ashrafiBudget: number,
         agibaOilBudget: number, agibaOilActual: number
  ) {
    // console.log('calling start edit');
    const dialogRef = this.dialog.open(BudgetActualAddComponent, {
        data: {
          rowData: {
            productionDate: productionDate,
            meleihaActual: meleihaActual,
            meleihaBudget: meleihaBudget,
            agharActual: agharActual,
            agharBudget: agharBudget,
            eastKanaysActual: eastKanaysActual,
            eastKanaysBudget: eastKanaysBudget,
            zarifActual: zarifActual,
            zarifBudget: zarifBudget,
            farasActual: farasActual,
            farasBudget: farasBudget,
            ramlActual: ramlActual,
            ramlBudget: ramlBudget,
            westernDesertActual: westernDesertActual,
            westernDesertBudget: westernDesertBudget,
            ashrafiActual: ashrafiActual,
            ashrafiBudget: ashrafiBudget,
            agibaOilBudget: agibaOilBudget,
            agibaOilActual: agibaOilActual
          },
        }
      })
    ;

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshData();
      }
    });
  }

  startEdit(recordId: number, productionDate: string,
            meleihaActual: number, meleihaBudget: number, agharActual: number, agharBudget: number,
            eastKanaysActual: number, eastKanaysBudget: number, zarifActual: number, zarifBudget: number,
            farasActual: any, farasBudget: number, ramlActual: number, ramlBudget: number,
            westernDesertActual: number, westernDesertBudget: number, ashrafiActual: number, ashrafiBudget: number,
            agibaOilBudget: number, agibaOilActual: number) {
    // console.log('calling add method');
    const dialogRef = this.dialog.open(BudgetActualEditComponent, {
        data: {
          rowData: {
            recordId: recordId,
            productionDate: productionDate,
            meleihaActual: meleihaActual,
            meleihaBudget: meleihaBudget,
            agharActual: agharActual,
            agharBudget: agharBudget,
            eastKanaysActual: eastKanaysActual,
            eastKanaysBudget: eastKanaysBudget,
            zarifActual: zarifActual,
            zarifBudget: zarifBudget,
            farasActual: farasActual,
            farasBudget: farasBudget,
            ramlActual: ramlActual,
            ramlBudget: ramlBudget,
            westernDesertActual: westernDesertActual,
            westernDesertBudget: westernDesertBudget,
            ashrafiActual: ashrafiActual,
            ashrafiBudget: ashrafiBudget,
            agibaOilBudget: agibaOilBudget,
            agibaOilActual: agibaOilActual,
          },
        }
      })
    ;

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshData();
      }
    });
  }

  deleteItem(recordId, i) {
    const dialogRef = this.dialog.open(BudgetActualDeleteComponent, {
      height: '200px',
      width: '450px',
      data: {recordId: recordId, index: i}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshData();
      }
    });
  }

  showGraph(recordId: any, productionDate: any, meleihaActual: any, meleihaBudget: any, agharActual: any,
            agharBudget: any, eastKanaysActual: any, eastKanaysBudget: any, zarifActual: any,
            zarifBudget: any, farasActual: any,
            farasBudget: any, ramlActual: any, ramlBudget: any, westernDesertActual: any, westernDesertBudget: any, ashrafiActual: any, ashrafiBudget: any, agibaOilActual: any, agibaOilBudget: any) {
    const dialogRef = this.dialog.open(BudgetActualChComponent, {
      height: '700px',
      width: '700px',
      data: {
        rowData: {
          recordId: recordId,
          productionDate: productionDate,
          meleihaActual: meleihaActual,
          meleihaBudget: meleihaBudget,
          agharActual: agharActual,
          agharBudget: agharBudget,
          eastKanaysActual: eastKanaysActual,
          eastKanaysBudget: eastKanaysBudget,
          zarifActual: zarifActual,
          zarifBudget: zarifBudget,
          farasActual: farasActual,
          farasBudget: farasBudget,
          ramlActual: ramlActual,
          ramlBudget: ramlBudget,
          westernDesertActual: westernDesertActual,
          westernDesertBudget: westernDesertBudget,
          ashrafiActual: ashrafiActual,
          ashrafiBudget: ashrafiBudget,
          agibaOilBudget: agibaOilBudget,
          agibaOilActual: agibaOilActual,
        }
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshData();
      }
    });
  }

  private refreshData() {
    this.findAll();
  }

}
