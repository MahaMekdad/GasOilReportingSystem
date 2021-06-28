import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductionBudegetDataResponse} from "../../../model/productionBudegetDataResponse";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductionBudgetService} from "../../../api/productionBudget.service";
import {DrillingInfoDataRequest} from "../../../model/drillingInfoDataRequest";
import {ProductionBudegetRequest} from "../../../model/productionBudegetRequest";

@Component({
  selector: 'app-update-production-budget',
  templateUrl: './update-production-budget.component.html',
  styleUrls: ['./update-production-budget.component.css']
})
export class UpdateProductionBudgetComponent implements OnInit {
  @Input()
  productionUpdate: ProductionBudegetDataResponse ;

  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  convertedDate: string;

  form: FormGroup;
  // convertedTime: string;
  constructor(private _productionBudgetService: ProductionBudgetService , private _formBuilder: FormBuilder) { }

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
    this.dateSeparaterHelper(this.productionUpdate.productionDate)
  }
  dateSeparaterHelper(datetime: Date){
    let x = new Date(datetime);
    this.convertedDate = x.toLocaleDateString();
    // this.convertedTime = x.getTime().toLocaleString();

  }
  update(){

    let productionRequest: ProductionBudegetRequest = this.form.value as ProductionBudegetRequest
    let dateValues = this.form.controls.date.value.split("-");
    // let timeValues = this.form.controls.time.value.split(":");
    productionRequest.productionDate = new Date(dateValues[0], dateValues[1]-1, dateValues[2], 0, 0);
    // console.log("--------------");
    // console.log(productionRequest);
    this._productionBudgetService.concessionsBudgetProductionBudgetIdPatch(productionRequest, this.productionUpdate.id).subscribe(
      response => {

        this.closeModal.emit()
      },
      error => {

      }
    );
  }
}
