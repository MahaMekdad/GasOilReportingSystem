import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldService } from 'src/app/api/field.service';
import { FieldsWellsResponse } from 'src/app/model/fieldsWellsResponse';
import {FieldNavComponent} from "../field-nav/field-nav.component";
import {FieldResponse} from "../../model/fieldResponse";

@Component({
  selector: 'app-well-nav',
  templateUrl: './well-nav.component.html',
  styleUrls: ['./well-nav.component.css']
})
export class WellNavComponent implements OnInit {

  allFieldWells: FieldsWellsResponse[]
  fields: FieldResponse;
  id: number;
  sub: any;
  concessionName: string;

  constructor(private _fieldService: FieldService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this._fieldService.fieldWellsIdGet(this.id).subscribe(
      data => {
        this.allFieldWells = data;
      },
      error => {
        console.log(error);
    });
    this.route.queryParams.subscribe(params => {
      this.concessionName = params.con
      // console.log(this.concessionName + " *********")
    }
    );
    this._fieldService.getfieldById(this.id).subscribe(
      data => {
        console.log(data);
        this.fields = data;
        console.log(this.fields);
      },
      error => {
        console.log(error);
      }
    );
  }

  navToFieldWells(currentIndex){
    this._router.navigate(['/well', this.allFieldWells[currentIndex].wellId], { queryParams: {con: this.concessionName}});
  }

  back() {
    console.log("fieldIddddddd == " + this.id);
    console.log("conIddddd == " + this.fields.concessionId);
   this._router.navigate(['/fieldNav' , this.fields.concessionId]);
  }
}
