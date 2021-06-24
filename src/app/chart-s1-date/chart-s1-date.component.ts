import { Component, ViewChild } from "@angular/core";
import { LabService } from 'src/app/api/lab.service';
import { LabMeasurementResponse } from 'src/app/model/labMeasurementResponse';
import { EventEmitter, OnInit, Output } from '@angular/core';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { DatePipe } from "@angular/common";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;

};


@Component({
  selector: 'app-chart-s1-date',
  templateUrl: './chart-s1-date.component.html',
  styleUrls: ['./chart-s1-date.component.css']
})
export class ChartS1DateComponent implements OnInit {

  labs: LabMeasurementResponse[];
  list: number[] = [];
  list1: number[] = [];

  list2: Date[] = [];
  dateS: string ="";
  list3: string[] = [];


  cloned: number[]


  ngOnInit(): void {
    this._labService.getAllLabs(null, null).subscribe(
      data => {
        this.labs = data;
      })
  }

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(public datepipe: DatePipe , private _labService: LabService) {}

  show() {
    debugger
    // this._labService.getAllLabs(null, null).subscribe(
    //   data => {
    //     this.labs = data;
    //   })
    console.log(this.labs)
    for (let counter: number = 0; counter < this.labs.length; counter++) {
      console.log(this.labs.length)
      console.log("-----1")
      console.log((this.labs[counter]).s1)
      console.log("-----2")
      console.log("-----3")
      this.list[counter] = ((this.labs[counter]).s1);
    }
    console.log("-----")
    console.log(this.list);
    // this.list[0]=1
    // this.list[1]=2
    this.list1 = [1, 10, 5, 4, 3, 2]

    //   for(var counter:number = 0; counter<this.labs.length; counter++){
    //     this.list2 [counter] = ((this.labs[counter]).date);
    //     console.log(this.list2)
    // }

    for (var counter: number = 0; counter < this.labs.length; counter++) {
      this.list2[counter] = ((this.labs[counter]).date);
      this.dateS = this.datepipe.transform(this.list2[counter], 'dd/MM/yyyy')
      this.list3[counter]=this.dateS;

      console.log(this.list2)
    }

    // this.list= this.labs.map(obj => ({obj}));

    // this.cloned = this.labs.map(x => Object.assign({}, x.s1));
    // console.log(this.cloned);


    this.chartOptions = {
      series: [
        {
          name: "S1",
          data: this.list

        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "S1 Date Chart",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.list3
      }
    };
  }
}

