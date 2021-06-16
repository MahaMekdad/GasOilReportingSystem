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
  constructor(private httpClient: HttpClient , private productionBudgetService: ProductionBudgetService ) { }


  ngOnInit(): void {
    this.productionBudgetService.concessionsBudgetProductionBudgetGet(null).subscribe((data: any[]) => {
      console.log("data = " + data);
      this.productionBudgetDataResponse = data;
    })

  }
  delete(index:number)
  {
    let productionbudget=this.productionBudgetDataResponse[index];
    this.productionBudgetService.concessionsBudgetProductionBudgetIdDelete(productionbudget.id).subscribe(
      response=>{
        this.productionBudgetDataResponse.splice(index,1);
      },
      error=>{
        alert("Error");
      }
    );
  }

}
