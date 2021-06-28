import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConcessionsService } from 'src/app/api/concessions.service';
import { AllConcessions } from 'src/app/model/allConcessions';

@Component({
  selector: 'app-concession-nav',
  templateUrl: './concession-nav.component.html',
  styleUrls: ['./concession-nav.component.css']
})
export class ConcessionNavComponent implements OnInit {

  allConcessions: AllConcessions;

  constructor(private _concessionService: ConcessionsService, private _router: Router) { }

  ngOnInit(): void {
    this.getAllConcessions();
  }

  getAllConcessions(){
    this._concessionService.findAllConcessions().subscribe(
      data => {
        this.allConcessions = data;
        // console.log(data);
      },
      error => { //if the response is error, display the error using alert.
        // console.log(error)
    })
  }

  navToConFields(currentIndex){
    this._router.navigate(['/fieldNav', this.allConcessions[currentIndex].id], { queryParams: {con: this.allConcessions[currentIndex].name}})
  }

}
