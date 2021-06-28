import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConcessionComponent} from '../../../components/concession/concession.component';
import {ConcessionsService} from '../../../api/concessions.service';
import {ConcessionResponse} from '../../../model/concessionResponse';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-concession-delete',
  templateUrl: './concession-delete.component.html',
  styleUrls: ['./concession-delete.component.css']
})
export class ConcessionDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConcessionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public concessionsService: ConcessionsService) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.concessionsService.deleteConcession(this.data.id).subscribe(
      (response: ConcessionResponse) => {
        // console.log(response);
        this.concessionsService.findAllConcessions();
      },
      (error: HttpErrorResponse) => {
        // alert(error.message);
      }
    );
  }

}
