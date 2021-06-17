import { Component, OnInit } from '@angular/core';
import {DrillingInfoDataResponse} from "../../model/drillingInfoDataResponse";
import {DrilingInfoService} from "../../api/drilingInfo.service";

@Component({
  selector: 'app-drilling-info',
  templateUrl: './drilling-info.component.html',
  styleUrls: ['./drilling-info.component.css']
})
export class DrillingInfoComponent implements OnInit {


  drill: DrillingInfoDataResponse[]
  constructor(private _drilingInfoService: DrilingInfoService) { }


  ngOnInit(): void {
    this._drilingInfoService.wellsDrillingInfoGet(null, null).subscribe(
      data => {
        // console.log(data)
        this.drill = data;
      }
    )
  }
}
