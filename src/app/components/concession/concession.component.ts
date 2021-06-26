import {ConcessionRequest} from '../../model/concessionRequest';
import {ConcessionResponse} from '../../model/concessionResponse';
import {ConcessionsService} from '../../api/concessions.service';
import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {ConcessionAddComponent} from '../../dialogs/add/concession-add/concession-add.component';
import {ConcessionDeleteComponent} from '../../dialogs/delete/concession-delete/concession-delete.component';
import {ConcessionEditComponent} from '../../dialogs/edit/concession-edit/concession-edit.component';


@Component({
  selector: 'app-concession',
  templateUrl: './concession.component.html',
  styleUrls: ['./concession.component.css']
})
export class ConcessionComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'ConcessionName', 'Actions'];
  public datasource: ConcessionResponse[];

  // (01) defining array of concession responses
  public concessionsList: ConcessionResponse[];
  public editConcession: ConcessionRequest;
  private addConcession: ConcessionRequest;
  index: number;
  id: number;

  // (02) Injecting the concession service
  constructor(private concessionsService: ConcessionsService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    // (04) Calling get all concession method
    this.getAllConcessions();
  }


  // (03) calling the service method to get all concessions
  public getAllConcessions() {
    this.concessionsService.findAllConcessions().subscribe(// this will make us notified when something happens
      (response: ConcessionResponse[]) => { // if the response is concession , add it to the response body
        this.concessionsList = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => { // if the response is error, display the error using alert.
        console.log(error);
      }
    );
  }


  addNew() {
    const dialogRef = this.dialog.open(ConcessionAddComponent, {
        height: '250px',
        width: '270px',
        data: {
          concession: this.addConcession,
        }
      })
    ;

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.getAllConcessions();
      }
    });
  }

  EditRecord(i, id, name) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(ConcessionEditComponent, {
      height: '250px',
      width: '270px',
      data: {id: id, name: name}
    });
    console.log('debugging 1 :----------');
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshData();
      }
    });
  }

  delete(i, id, name) {
    console.log('i ' + name);
    console.log('i ' + id);
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(ConcessionDeleteComponent, {
      height: '200px',
      width: '450px',
      data: {id: id, name: name}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refreshData();
      }
    });
  }

  refreshData() {
    this.getAllConcessions();
  }
}
