import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";
import { FluidLevelMeasurementsService } from 'src/app/api/fluidLevelMeasurements.service';
import { FluidLevelMeasurementResponse } from 'src/app/model/fluidLevelMeasurementResponse';
import { dataSeries } from "./dataSeries";

@Component({
  selector: 'app-flm-line-chart',
  templateUrl: './flm-line-chart.component.html',
  styleUrls: ['./flm-line-chart.component.css']
})
export class FlmLineChartComponent implements OnInit {

  public series: ApexAxisChartSeries;
  public chart: ApexChart;
  public dataLabels: ApexDataLabels;
  public markers: ApexMarkers;
  public title: ApexTitleSubtitle;
  public fill: ApexFill;
  public yaxis: ApexYAxis;
  public xaxis: ApexXAxis;
  public tooltip: ApexTooltip;

  flms: FluidLevelMeasurementResponse[] = [];

  constructor(private _fluidLevelMeasurementsService: FluidLevelMeasurementsService) { }

  ngOnInit(): void {
    this._fluidLevelMeasurementsService.wellsWellIdFluidLevelMeasurementsGet(1).subscribe(
      data => {
        this.flms = data;
        console.log(this.flms);
        this.initChartData();
      },
      error => {
        console.log(error);
      });
  }

  public initChartData(): void {
    let flmDates = [];
    let flmValues = [];
    for (let i = 0; i < this.flms.length; i++) {
        flmDates.push(this.flms[i].date);
        flmValues.push(this.flms[i].fluidLevel);
    }
    let resultSet: any[][] = [];

    for (let i = 0; i < this.flms.length; i++) {
      resultSet.push([{date: flmDates[i], value: flmValues[i]}])
    }
    
    // let ts2 = 1484418600000;
    // let dates = [];
    // for (let i = 0; i < this.flms.length; i++) {
    //   ts2 = ts2 + 86400000;
    //   // console.log("lol")
    //   // console.log(this.flms[i])
    //   // console.log(this.flms[i].date)
    //   // console.log(this.flms[1][i].date)
    //   // dates.push([ts2, this.flms[1][i].value]);
    //   // dates.push([{ x: this.flms[i].date.getDate, y: this.flms[i].fluidLevel }]);
    //   dates.push([this.flms[i].date, this.flms[i].fluidLevel]);
    //   // dates.push([ts2, this.flms[i].date]);
    //   // dates.push([ts2, this.flms[1][i].date]);
    // }

    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < resultSet.length; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, resultSet[0][i].value]);
    }

    this.series = [
      {
        name: "Fluid Level",
        data: dates
      }
    ];
    this.chart = {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.title = {
      text: "Fluid Level Measurements",
      align: "left"
    };
    this.fill = {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis = {
      labels: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: "Fluid Level"
      }
    };
    this.xaxis = {
      type: "datetime"
    };
    this.tooltip = {
      shared: false,
      y: {
        formatter: function (val) {
          return (val / 1000000).toFixed(0);
        }
      }
    };
  }

}
