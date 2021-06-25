import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpErrorResponse} from '@angular/common/http';
import {WellTestTableComponent} from '../../../components/well-test-table/well-test-table.component';
import {WellTestsService} from '../../../api/wellTests.service';
import {WellTestResponse} from '../../../model/wellTestResponse';

@Component({
  selector: 'app-well-test-delete',
  templateUrl: './well-test-delete.component.html',
  styleUrls: ['./well-test-delete.component.css']
})
export class WellTestDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WellTestTableComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public wellTestService: WellTestsService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.wellTestService.deleteTest(this.data.id, 1).subscribe(
      (response: WellTestResponse) => {
        console.log(response);
        this.refreshData();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  private refreshData() {
    console.log('as if we are updating data');
  }
}
