import {Component, Inject, OnInit} from '@angular/core';
import { ViewChild } from '@angular/core';
import {FieldsBudgetAndActualResponse} from '../../model/fieldsBudgetAndActualResponse';
import {ConcessionsBudgetsService} from '../../api/concessionsBudgets.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from 'ng-apexcharts';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-budget-actual-chart',
  templateUrl: './budget-actual-chart.component.html',
  styleUrls: ['./budget-actual-chart.component.css']
})
export class BudgetActualChartComponent implements OnInit {
  fieldsBudgetAndActualResponses: FieldsBudgetAndActualResponse[];
  budgetList: number[] = [];
  actualList: number[] = [];



  ngOnInit(): void {
    this._concessionsBudgetsService.findAllRecords(null, null).subscribe(
      data => {
        this.fieldsBudgetAndActualResponses = data;
      })
  }
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private _concessionsBudgetsService : ConcessionsBudgetsService , public dialogRef: MatDialogRef<BudgetActualChartComponent>, @Inject(MAT_DIALOG_DATA) public data: any, ) {
    // for (let counter: number = 0; counter < this.fieldsBudgetAndActualResponses.length; counter++) {
    //
    //   if(this.fieldsBudgetAndActualResponses[counter].i)
    // }
    this.chartOptions = {
      series: [
        {
          name: "Budget",
          data: [this.data.rowData.meleihaBudget, this.data.rowData.agharBudget,
            this.data.rowData.eastKanaysBudget  , this.data.rowData.zarifBudget ,
            this.data.rowData.farasBudget , this.data.rowData.ramlBudget ,this.data.rowData.westernDesertBudget ,this.data.rowData.ashrafiBudget ,
            this.data.rowData.agibaOilBudget]
        },
        {
          name: "Actual",
          data: [this.data.rowData.meleihaActual, this.data.rowData.agharActual,
            this.data.rowData.eastKanaysActual  , this.data.rowData.zarifActual ,
            this.data.rowData.farasActual , this.data.rowData.ramlActual ,this.data.rowData.westernDesertActual ,this.data.rowData.ashrafiActual ,
            this.data.rowData.agibaOilActual]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: "smooth"
      },
      title: {
        text: "Concession's budget vs actual",
        align: "left"
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["Meleiha", "Aghar", "EastKanays", "Zarif", "Faras", "Raml", "WesternDesert" ,"Ashrafi" ,"AgibaOil"],
        title: {
          text: "Concessions"
        }
      },
      yaxis: {
        title: {
          text: "Temperature"
        },
        min: 0,
        max: 10000
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  }


}
