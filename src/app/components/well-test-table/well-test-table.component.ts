import { WellTestResponse } from './../../model/wellTestResponse';
import { WellTestsService } from 'src/app/api/wellTests.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-well-test-table',
  templateUrl: './well-test-table.component.html',
  styleUrls: ['./well-test-table.component.css']
})
export class WellTestTableComponent implements OnInit {

  //(01) defining array of welltest responces
 public testListForAllWells: WellTestResponse[];
 public testListForSpecificWell: WellTestResponse[];

  // (02) injecting the well test service
  constructor(private wellTestsService: WellTestsService) {

  }

  ngOnInit(): void {
    this.getTests();
    this.getTestsForAWell(1);
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





}
