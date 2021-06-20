import { Component, OnInit } from '@angular/core';
import { ProductionBudegetDataResponse } from '../../model/productionBudegetDataResponse';
import { HttpClient } from '@angular/common/http';
import {ProductionBudgetService} from '../../api/productionBudget.service';


@Component({
  selector: 'app-production-budget',
  templateUrl: './production-budget.component.html',
  styleUrls: ['./production-budget.component.css']
})
export class ProductionBudgetComponent implements OnInit {
  productionBudgetDataResponse: ProductionBudegetDataResponse[] = [];
  HighlightRow: number;
  Employee: any;
  // ClickedRow: any;
  constructor(private httpClient: HttpClient , private productionBudgetService: ProductionBudgetService ) {
    // this.ClickedRow = function (index) {
    //   this.HighlightRow = index;
    // }
  }

  ngOnInit(): void {
    this.productionBudgetService.concessionsBudgetProductionBudgetGet(null).subscribe((data: any[]) => {
      console.log("data = " + data);
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

}
