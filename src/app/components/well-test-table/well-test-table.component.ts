import {WellTestResponse} from '../../model/wellTestResponse';
import {WellTestsService} from 'src/app/api/wellTests.service';
import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {WellTestAddComponent} from '../../dialogs/add/well-test-add/well-test-add.component';
import {WellTestRequest} from '../../model/wellTestRequest';
import {WellTestEditComponent} from '../../dialogs/edit/well-test-edit/well-test-edit.component';
import {WellTestDeleteComponent} from '../../dialogs/delete/well-test-delete/well-test-delete.component';


@Component({
  selector: 'app-well-test-table',
  templateUrl: './well-test-table.component.html',
  styleUrls: ['./well-test-table.component.css']
})
export class WellTestTableComponent implements OnInit {

  // (02) injecting the well test service
  constructor(
    private wellTestsService: WellTestsService,
    private dialog: MatDialog
  ) {
  }
  public dataSource: WellTestResponse[];
  public wellTestEdit: WellTestRequest;
  public testListForAllWells: WellTestResponse[];
  public testListForSpecificWell: WellTestResponse[];
  wellId = 1;
  displayedColumns: string[] = [
    // 'id',
    'productionDate',
    'tDuration',
    'gross',
    'net',
    'waterCut',
    'gor',
    'gasRate',
    'cond',
    'whp',
    'wht',
    'usp',
    'ust',
    'sp',
    'st',
    'flp',
    'flt',
    'chockType',
    'chockSize',
    'h2s',
    'co2',
    'unit',
    'remarks', 'actions'];

  // find a test list for specific well Based on well Id
  private wellTestAdd: WellTestRequest;

  ngOnInit(): void {
    this.getTestsForAWell(this.wellId);
  }


  // (03) define a method to get all well test data for all wells
  public getTests() {
    this.wellTestsService.findAllTests().subscribe( // this will make us notified when something happens
      (response: WellTestResponse[]) => { // if the response is object, add it to the response body
        this.testListForAllWells = response;
        this.dataSource = this.testListForAllWells;
        console.log(response);
      },
      (error: HttpErrorResponse) => { // if the response is error, display the error using alert.
        alert(error.message);
      }
    );
  }
  public getTestsForAWell(wellId: number) {
    this.wellTestsService.getTestById(wellId).subscribe( // this will make us notified when something happens
      (response: WellTestResponse[]) => { // if the response is object, add it to the response body
        this.testListForSpecificWell = response;
        this.dataSource = this.testListForSpecificWell;
        console.log('from method 2');
        console.log(response);
      },
      (error: HttpErrorResponse) => { // if the response is error, display the error using alert.
        alert(error.message);
      }
    );
  }

  addNew() {
    const dialogRef = this.dialog.open(WellTestAddComponent, {
        data: {
          recordToAdd: this.wellTestAdd
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshData();
      }
    });
  }

  startEdit(recordId: number, productionDate: string,
            gross: number, net: number, waterCut: number, gor: number,
            gasRate: number, condensateRate: number, whp: number, wht: number,
            usp: any, ust: number, sp: number, st: number,
            flp: number, flt: number, chockType: string, chockSize: number,
            h2s: number, co2: number, unit: string, remarks: string) {
    console.log('calling edit method');
    const dialogRef = this.dialog.open(WellTestEditComponent, {
        data: {
          rowData: {
            recordId,
            productionDate,
            gross,
            net,
            waterCut,
            gor,
            gasRate,
            condensateRate,
            whp,
            wht,
            usp,
            ust,
            sp,
            st,
            flp,
            flt,
            chockType,
            chockSize,
            h2s,
            co2,
            unit,
            remarks
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
    const dialogRef = this.dialog.open(WellTestDeleteComponent, {
      height: '200px',
      width: '450px',
      data: {recordId, index: i}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshData();
      }
    });
  }


  private refreshData() {
    this.getTestsForAWell(this.wellId);
  }
}
