import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FieldService } from 'src/app/api/field.service';
import { FieldsWellsResponse } from 'src/app/model/fieldsWellsResponse';

@Component({
  selector: 'app-well-nav',
  templateUrl: './well-nav.component.html',
  styleUrls: ['./well-nav.component.css']
})
export class WellNavComponent implements OnInit {

  allFieldWells: FieldsWellsResponse[]
  id: number;
  sub: any;

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
  }

  navToFieldWells(currentIndex){
    this._router.navigate(['/well', this.allFieldWells[currentIndex].wellId]);
  }

}
