import { Component, OnInit } from '@angular/core';
import { ProductionBudegetDataResponse } from '../../model/productionBudegetDataResponse';
import { HttpClient } from '@angular/common/http';
import {ProductionBudgetService} from '../../api/productionBudget.service';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import {ProductionBudegetRequest} from '../../model/productionBudegetRequest';


@Component({
  selector: 'app-production-budget',
  templateUrl: './production-budget.component.html',
  styleUrls: ['./production-budget.component.css']
})
export class ProductionBudgetComponent implements OnInit {
  productionBudgetDataResponse: ProductionBudegetDataResponse[] = [];
  productionBudgetDataInsert: ProductionBudegetRequest;
  HighlightRow: number;
  closeModal: string;
  window: NgbModalRef;
  insertForm = new FormControl('');
  constructor(private httpClient: HttpClient , private productionBudgetService: ProductionBudgetService , private modalService: NgbModal ) {
  }

  ngOnInit(): void {
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
      this.productionBudgetDataInsert.meleiha = 2 ;
      console.log("========== "+ this.productionBudgetDataInsert);
      this.productionBudgetDataResponse = data;
    })

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
  insert(): void
 {
   console.log("datee === " + this.productionBudgetDataInsert.productionDate);
   console.log("meleiha === " + this.productionBudgetDataInsert.meleiha);
   console.log("aghar === " + this.productionBudgetDataInsert.aghar);
   console.log("zarif === " + this.productionBudgetDataInsert.zarif);
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
}
