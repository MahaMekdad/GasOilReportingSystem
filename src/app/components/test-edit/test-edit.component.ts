import {WellTestResponse} from './../../model/wellTestResponse';
import {WellTestsService} from 'src/app/api/wellTests.service';
import {WellTestRequest} from './../../model/wellTestRequest';
import {NgForm} from '@angular/forms';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.css']
})
export class TestEditComponent implements OnInit {

  id: number;
  header: string;
  WellTestRequestEdit: WellTestRequest;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private wellTestsService: WellTestsService
  ) {

  }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.paramMap.get('id');
    // this.header = this.id === 0 ? 'Add Test' : 'Edit Record';
    // if (this.id !== 0) { // is update operation
    //   this.wellTestsService.updateWellTestRecord(this.WellTestRequestEdit, 1, this.id);
    // }
  }

  onSubmit(form: NgForm) {
    // passing the well test object to the save method in the service layer
    let WellTestRequest: WellTestRequest = {
      productionDate: form.value.productionDate,
      tDuration: form.value.tDuration,
      gross: form.value.gross,
      net: form.value.tDuration,
      waterCut: form.value.waterCut,
      gor: form.value.gor,
      gasRate: form.value.gasRate,
      whp: form.value.whp,
      wht: form.value.wht,
      usp: form.value.usp,
      ust: form.value.ust,
      sp: form.value.sp,
      st: form.value.st,
      flp: form.value.flp,
      flt: form.value.flt,
      chockType: form.value.chockType,
      chockSize: form.value.chockSize,
      h2s: form.value.h2s,
      co2: form.value.co2,
      unit: form.value.unit,
      remarks: form.value.remarks
    };

    // the value of the well test id need to be changed.
    this.wellTestsService.addTestRecord(WellTestRequest, 1).subscribe(
      (response: WellTestResponse) => {
        console.log(response);
        form.reset(); // clearing the form after process
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

    // navigating back to the table page
    this.router.navigateByUrl('tests');
  }


}
