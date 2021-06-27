import { Component, OnInit,ViewChild } from '@angular/core';
import { GetAllWells } from '../model/getAllWells';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
} from "ng-apexcharts";
import { WellService } from '../api/api';
import { WellCoordinateService } from '../api/well-coordinate.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: any
};

@Component({
  selector: 'app-well-general-info-chart',
  templateUrl: './well-general-info-chart.component.html',
  styleUrls: ['./well-general-info-chart.component.css']
})
export class WellGeneralInfoChartComponent implements OnInit {


  fieldId:number=1;
  
  ngOnInit(): void {
  }
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(wellService:WellService,wellCoordinateService:WellCoordinateService) {
    let series_=[];
    wellCoordinateService.wellsCoordinatesGet(this.fieldId).subscribe(Response=>{
      let wellsCoordinates=Response;
      //console.log(Response);
      for(let wellCoordinate of wellsCoordinates){
           series_.push({
              name:wellCoordinate.wellName ,
              data: [
                [wellCoordinate.xcord,wellCoordinate.ycord]]
              });
      }
     
    });
    this.chartOptions = {
      series: series_
      ,
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy'
        }
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function(val) {
            return parseFloat(val).toFixed(1)
          }
        },
         title: {
           text:"Xcord"
          }
      },
      yaxis: {
        tickAmount: 7,
        title: {
          text:"Ycord"
         }
      },
      title:{
        text:"Wells Coordinates Chart"
      }
    };
  }
}
