import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { ActivatedRoute, Router } from '@angular/router';
import { ConcessionsService } from 'src/app/api/concessions.service';
import { FieldService } from 'src/app/api/field.service';
import { ConcessionsFieldsResponse } from 'src/app/model/concessionsFieldsResponse';
import { FieldsWellsResponse } from 'src/app/model/fieldsWellsResponse';

@Component({
  selector: 'app-field-nav',
  templateUrl: './field-nav.component.html',
  styleUrls: ['./field-nav.component.css']
})
export class FieldNavComponent implements OnInit {

  allConFields: ConcessionsFieldsResponse[]
  id: number;
  sub: any;
  concessionName: string;

  constructor(private _concessionsService: ConcessionsService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.route.queryParams.subscribe(params => {
        this.concessionName = params.con
        // console.log(this.concessionName + " *********")
      }
    );
    this._concessionsService.concessionFieldsIdGet(this.id).subscribe(
      data => {
        this.allConFields = data;
      },
      error => {
        console.log(error);
    });
  }

  navToFieldWells(currentIndex){
    this._router.navigate(['/wellNav', this.allConFields[currentIndex].fieldId], { queryParams: {con: this.concessionName}});
  }

  back() {
    this._router.navigate(['/conNav']);
  }
}
