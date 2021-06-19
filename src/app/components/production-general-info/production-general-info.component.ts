import { Component, OnInit } from '@angular/core';
import {AllProductionGeneralInfoWithNamesResponse} from "../../model/allProductionGeneralInfoWithNamesResponse";
import {ProductionGeneralInfoService} from "../../api/productionGeneralInfo.service";

@Component({
  selector: 'app-production-general-info',
  templateUrl: './production-general-info.component.html',
  styleUrls: ['./production-general-info.component.css']
})
export class ProductionGeneralInfoComponent implements OnInit {

  pqi: AllProductionGeneralInfoWithNamesResponse[]

  constructor(private _productionGeneralInfoService: ProductionGeneralInfoService) { }

  ngOnInit(): void {
    this._productionGeneralInfoService.wellsProductionGeneralInfoGet(null, null).subscribe(
      data => {
        // console.log(data)
        this.pqi = data;
      }
    )
  }

  deleteFromPqi(index: number) {
    let Pqi = this.pqi[index];
    this._productionGeneralInfoService.wellsWellIdProductionGeneralInfoPgiIdDelete(Pqi.wellId,Pqi.id,"body").subscribe(
      response => {
        this.pqi.splice(index, 1);
      },
      error => {
        alert(error.errorMessage);
      }
    );
  }

}
