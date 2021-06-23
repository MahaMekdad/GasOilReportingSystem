import { Component, OnInit } from '@angular/core';
import { ProductionBudegetDataResponse } from '../../model/productionBudegetDataResponse';
import { HttpClient } from '@angular/common/http';
import {ProductionBudgetService} from '../../api/productionBudget.service';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductionBudegetRequest} from '../../model/productionBudegetRequest';
import {DrillingInfoDataResponse} from "../../model/drillingInfoDataResponse";


@Component({
  selector: 'app-production-budget',
  templateUrl: './production-budget.component.html',
  styleUrls: ['./production-budget.component.css']
})
export class ProductionBudgetComponent implements OnInit {
  productionBudgetDataResponse: ProductionBudegetDataResponse[] = [];
  productionBudgetDataInsert: ProductionBudegetRequest;
  HighlightRow: number = -1;
  closeModal: string;
  window: NgbModalRef;
  form: FormGroup;
  date: string;
  time: string;
  productionBudgetDataUpdate: ProductionBudegetRequest;
  dateForUpdate:string;
  timeForUpdate:string;
  datte:Date;
  productionUpdate: ProductionBudegetDataResponse;


  constructor(private httpClient: HttpClient ,private _formBuilder: FormBuilder, private productionBudgetService: ProductionBudgetService , private modalService: NgbModal ) {
  }

  ngOnInit(): void {
    // this.form = this._formBuilder.group({
    //   productionDate: ['', [Validators.required]],
    //   meleiha: ['', [Validators.required]],
    //   aghar: ['', [Validators.required]],
    //   eastKanays: ['', [Validators.required]],
    //   zarif: ['', [Validators.required]],
    //   faras: ['', [Validators.required]],
    //   raml: ['', [Validators.required]],
    //   westernDesert: ['', [Validators.required]],
    //   ashrafi: ['', [Validators.required]],
    //   agibaOil: ['', [Validators.required]],
    //   salesGas: ['', [Validators.required]],
    //   agibaBOE: ['', [Validators.required]]
    // });

    this.productionBudgetService.concessionsBudgetProductionBudgetGet(null).subscribe((data: any[]) => {
      console.log("data = " + data);
      this.productionBudgetDataInsert = new class implements ProductionBudegetRequest {
        aghar: number;
        agibaBOE: number;
        agibaOil: number;
        ashrafi: number;
        eastKanays: number;
        faras: number;
        meleiha: number;
        productionDate: Date;
        raml: number;
        salesGas: number;
        westernDesert: number;
        zarif: number;
      }
      console.log("========== "+ this.productionBudgetDataInsert);
      this.productionBudgetDataResponse = data;
    })

  }
  ClickedRowToUpdate(index: number)
  {
    if(this.HighlightRow == -1 || this.HighlightRow == undefined){
      this.productionUpdate = null;
      return;
    }
    let x = this.productionBudgetDataResponse[this.HighlightRow];
    this.productionUpdate = x;
  }
  ClickedRow(index:number)
  {
    if(this.HighlightRow == index)
    {
      this.HighlightRow = -1;
      return;
    }
    this.HighlightRow = index;
  }
  triggerModal(content) {
    this.window = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});

  }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
  delete()
  {
    console.log("inedx" + this.HighlightRow);
    let productionbudget=this.productionBudgetDataResponse[this.HighlightRow];
    this.productionBudgetService.concessionsBudgetProductionBudgetIdDelete(productionbudget.id).subscribe(
      response=>{
        this.productionBudgetDataResponse.splice(this.HighlightRow,1);
        this.HighlightRow = -1;

      },
      error=>{
        alert("Error");
      }
    );
  }
  getALl()
  {
    this.productionBudgetService.concessionsBudgetProductionBudgetGet(null).subscribe((data: any[]) => {
      console.log("data = " + data);
      this.productionBudgetDataResponse = data;
    })
  }
  helper():void
  {
    let productionbudget=this.productionBudgetDataResponse[this.HighlightRow];
    this.productionBudgetDataUpdate = productionbudget;
    let s = this.productionBudgetDataUpdate.productionDate.toString().split("T");
    console.log("s[0] == "+ s[0]);
    let ss = s.toString().split("-");
    let sss = ss[2].toString().split(",");
    console.log("ss[2]== "+ ss[2]);
    this.datte = new Date(ss[0]+'-'+ss[1]+'-'+ sss[0]);
    this.dateForUpdate  = ss[1] + '/' + sss[0] + '/' + ss[0];

    console.log("dateforUpdate == "+ this.dateForUpdate);
    console.log("date == "+ this.datte);
  }
  update():void
  {
   console.log("dateForUpdatee ageaim == "+ this.dateForUpdate);
    let dateValues = this.dateForUpdate.split("/");
    let n1 :number = +dateValues[0];
    let n2 :number = +dateValues[1];
    let n3 :number = +dateValues[2];
    console.log("--- " + n1 +" ------- "+n2 +" ----- "+n3);
    let dateString = n3 +'-' +n1 +'-' + n2 + "T00:00:00Z";
    let date = new Date(dateString);
    console.log("dateee=== " + date);
    //this.productionBudgetDataUpdate.productionDate =  date;
    console.log("production date=== "+this.productionBudgetDataUpdate.productionDate);
    console.log(this.productionBudgetDataUpdate);
    this.productionBudgetService.concessionsBudgetProductionBudgetIdPatch(this.productionBudgetDataUpdate , this.productionBudgetDataResponse[this.HighlightRow].id).subscribe(
      response=>{
        this.HighlightRow = -1;
        this.window.dismiss();


      },
      error=>{
        alert("Error");
      }
    );




  }
  insert(): void
 {
   console.log("datee === " + this.productionBudgetDataInsert.productionDate);
   console.log("meleiha === " + this.productionBudgetDataInsert.meleiha);
   console.log("aghar === " + this.productionBudgetDataInsert.aghar);
   console.log("zarif === " + this.productionBudgetDataInsert.zarif);
   let dateValue = this.date.split("-");
   let timeValues = this.time.split(":");
   console.log("dateVlaues === "+ dateValue);
   console.log("timeValuess === "+ timeValues);
   let n1 :number = +dateValue[0];
   let n2 :number = +dateValue[1];
   let n3 :number = +dateValue[2];
   let n4 :number = +timeValues[0];
   let n5 :number = +timeValues[1];
   console.log("--- "+ n1+ " -" + n2 + "=" + n3 +" -" +n4+"-" +n5);
   this.productionBudgetDataInsert.productionDate = new Date(n1 , n2 , n3, n4 , n5);
   console.log("datee===  "+this.productionBudgetDataInsert.productionDate);
   this.productionBudgetService.concessionsBudgetProductionBudgetPost(this.productionBudgetDataInsert).subscribe(
     response=>{
       console.log("insert done");
       this.getALl();
       this.window.dismiss();
     },
     error=>{
       alert("Error");
     }
   );
 }
  loadRecords(){
    this.productionBudgetService.concessionsBudgetProductionBudgetGet(null).subscribe((data: any[]) => {
      console.log("heeeeeeeeeeaaaaaaar");
      console.log("data = " + data);
      this.productionBudgetDataResponse = data;
    })
  }
  closePopUpAndRefreshTable(): void{
    this.window.dismiss();
    this.loadRecords();
  }
}
