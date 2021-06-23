import {Component, OnInit} from '@angular/core';
import {ConcessionsBudgetsService} from '../../api/concessionsBudgets.service';
import {MatDialog} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import {FieldsBudgetAndActualResponse} from '../../model/fieldsBudgetAndActualResponse';
import {BudgetActualDeleteComponent} from '../../dialogs/delete/budget-actual-delete/budget-actual-delete.component';
import {BudgetActualAddComponent} from '../../dialogs/add/budget-actual-add/budget-actual-add.component';
import {BudgetActualEditComponent} from '../../dialogs/edit/budget-actual-edit/budget-actual-edit.component';

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
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addNew() {
    console.log('calling start edit');
    const dialogRef = this.dialog.open(BudgetActualAddComponent, {
        height: '200px',
        width: '450px',
        data: {
          rowData: {name: 'dummy name'},
        }
      })
    ;

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshData();
      }
    });
  }

  startEdit(i: number, productionDate: string,
            meleihaActual: number, meleihaBudget: number, agharActual: number, agharBudget: number,
            eastKanaysActual: number, eastKanaysBudget: number, zarifActual: number, zarifBudget: number,
            farasActual: any, farasBudget: number, ramlActual: number, ramlBudget: number,
            westernDesertActual: number, westernDesertBudget: number, ashrafiActual: number, ashrafiBudget: number,
            agibaOilBudget: number, agibaOilActual: number) {
    console.log('calling add method');
    const dialogRef = this.dialog.open(BudgetActualEditComponent, {
        data: {
          rowData: {
            index: i + 1,
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

  deleteItem(i, id) {
    this.index = i + 1;
    this.id = id;
    console.log('i ' + id);
    console.log('i ' + i);
    const dialogRef = this.dialog.open(BudgetActualDeleteComponent, {
      height: '200px',
      width: '450px',
      data: {id: id, index: i}
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
