import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ProductionBudgetService} from "../../api/productionBudget.service";
import { ProductionBudegetRequest } from './../../model/productionBudegetRequest';
import {DrillingInfoDataRequest} from "../../model/drillingInfoDataRequest";

@Component({
  selector: 'app-new-productionbudget',
  templateUrl: './new-productionbudget.component.html',
  styleUrls: ['./new-productionbudget.component.css']
})
export class NewProductionbudgetComponent implements OnInit {
  form: FormGroup;
  window: NgbModalRef;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  constructor(private _productionBudgetService: ProductionBudgetService , private _formBuilder: FormBuilder , private modalService: NgbModal) { }
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      date:['', [Validators.required]],
      // time:['', [Validators.required]],
      meleiha:['', [Validators.required]],
      aghar:['', [Validators.required]],
      eastKanays:['', [Validators.required]],
      zarif:['', [Validators.required]],
      faras:['', [Validators.required]],
      raml:['', [Validators.required]],
      westernDesert:['', [Validators.required]],
      ashrafi: ['', [Validators.required]],
      agibaOil: ['', [Validators.required]],
      salesGas: ['', [Validators.required]],
      agibaBOE: ['', [Validators.required]]
    })
  }
  insert() {

    let prodBudget: ProductionBudegetRequest = this.form.value as ProductionBudegetRequest;
    let dateValues = this.form.controls.date.value.split("-");
    // let timeValues = this.form.controls.time.value.split(":");
    prodBudget.productionDate = new Date(dateValues[0], dateValues[1]-1, dateValues[2], 0, 0)
    this._productionBudgetService.concessionsBudgetProductionBudgetPost(prodBudget).subscribe(
      response => {
        this.closeModal.emit();
      },
      error => {

      }
    );
  }
}
