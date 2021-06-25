import {WellTestResponse} from '../../model/wellTestResponse';
import {WellTestsService} from 'src/app/api/wellTests.service';
import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {TestEditComponent} from '../test-edit/test-edit.component';
import {ConfirmationComponent, ConfirmDialogModel} from '../general/confirmation/confirmation.component';


@Component({
  selector: 'app-well-test-table',
  templateUrl: './well-test-table.component.html',
  styleUrls: ['./well-test-table.component.css']
})
export class WellTestTableComponent implements OnInit {

  // (01) defining array of well test responses
  public testListForAllWells: WellTestResponse[];
  public testListForSpecificWell: WellTestResponse[];
  confirmationResult: string = '';
  addResult: string = '';
  editResult: string = '';

  // (02) injecting the well test service
  private wellId: number = 1;

  constructor(
    private wellTestsService: WellTestsService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getTests();
    this.getTestsForAWell(this.wellId);
  }


  // (03) define a method to get all well test data for all wells
  public getTests() {
    this.wellTestsService.findAllTests().subscribe( // this will make us notified when something happens
      (response: WellTestResponse[]) => { // if the response is object, add it to the response body
        this.testListForAllWells = response;
      },
      (error: HttpErrorResponse) => { // if the response is error, display the error using alert.
        alert(error.message);
      }
    );
  }


  // find a test list for specific well Based on well Id
  public getTestsForAWell(wellId: number) {
    this.wellTestsService.getTestById(wellId).subscribe( // this will make us notified when something happens
      (response: WellTestResponse[]) => { // if the response is object, add it to the response body
        this.testListForSpecificWell = response;
      },
      (error: HttpErrorResponse) => { // if the response is error, display the error using alert.
        alert(error.message);
      }
    );
  }

  openAddDialog() {
    let dialogRef = this.dialog.open(TestEditComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`result is: ${result}`);
    });
  }

  openEditDialog() {
    let dialogRef1 = this.dialog.open(TestEditComponent);
    dialogRef1.afterClosed().subscribe(result => {
      console.log(`edit is called`);
    });
  }

  openConfirmation(): void {
    const message = `Are you sure you want to do this?`;
    const dialogData = new ConfirmDialogModel('Confirm Action', message);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      maxWidth: '700px',
      maxHeight: '500px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.confirmationResult = dialogResult;
    });
  }
}
