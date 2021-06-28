import { OnInit } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import { LabMeasurementResponse } from 'src/app/model/labMeasurementResponse';
import { LabService } from 'src/app/api/lab.service';

@Component({
  selector: 'app-lab-pdf',
  templateUrl: './lab-pdf.component.html',
  styleUrls: ['./lab-pdf.component.css']
})
export class LabPdfComponent implements OnInit {

  constructor(public _labService:LabService) { }

  t3: string = new Date((new Date()).valueOf() - 1000*60*60*24).toISOString()
  t4: string = new Date().toISOString()
  dateToday: string = new Date().toLocaleDateString();


  ngOnInit(): void {
    this.loadRecords();
  }
  labs: LabMeasurementResponse[]

name = 'Labs';

@ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

loadRecords(){
  this._labService.getAllLabs(this.t3,this.t4).subscribe(
    data => {
      // console.log(data)
      this.labs= data;
    }
)
  }

public genPDF() {

var data = document.getElementById('pdfContent');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  

      var img = new Image()
      img.src = 'assets/logo/agiba.jpeg'

      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF      
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight) 
      pdf.addImage(img, 'png', 165, 5, 50, 50) 
      pdf.save('Report for Labs.pdf'); // Generated PDF   
    });  

}

}
