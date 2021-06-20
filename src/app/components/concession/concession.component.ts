import { ConcessionRequest } from './../../model/concessionRequest';
import { ConcessionResponse } from './../../model/concessionResponse';
import { ConcessionsService } from './../../api/concessions.service';
import { AllConcessions } from './../../model/allConcessions';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-concession',
  templateUrl: './concession.component.html',
  styleUrls: ['./concession.component.css']
})
export class ConcessionComponent implements OnInit {
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    var actions = $("table td:last-child").html();
    // Append table with add row form on add new button click
      $(".add-new").click(function(){
      $(this).attr("disabled", "disabled");
      var index = $("table tbody tr:last-child").index();
          var row = '<tr>' +
              '<td><input type="text" class="form-control" name="concessionId" id="concessionId"></td>' +
              '<td><input type="text" class="form-control" name="concessionName" id="concessionName"></td>' +
              '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
        '<td>' + actions + '</td>' +
          '</tr>';
        $("table").append(row);
      $("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
          $('[data-toggle="tooltip"]').tooltip();
      });
    // Add row on add button click
    $(document).on("click", ".add", function(){
      var empty = false;
      var input = $(this).parents("tr").find('input[type="text"]');
          input.each(function(){
        if(!$(this).val()){
          $(this).addClass("error");
          empty = true;
        } else{
                  $(this).removeClass("error");
              }
      });
      $(this).parents("tr").find(".error").first().focus();
      if(!empty){
        input.each(function(){
          $(this).parent("td").html($(this).val());
        });
        $(this).parents("tr").find(".add, .edit").toggle();
        $(".add-new").removeAttr("disabled");
      }
      });
    // Edit row on edit button click
    $(document).on("click", ".edit", function(){
          $(this).parents("tr").find("td:not(:last-child)").each(function(){
        $(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
      });
      $(this).parents("tr").find(".add, .edit").toggle();
      $(".add-new").attr("disabled", "disabled");
      });
    // Delete row on delete button click
    $(document).on("click", ".delete", function(){
          $(this).parents("tr").remove();
      $(".add-new").removeAttr("disabled");
      });
  });

}


  headElements = ['ID', 'Concession Name'];

  //(01) defining array of concession responces
  public concessionResponces: ConcessionResponse[]
  public editConcession: ConcessionRequest;
  public deleteConcession: ConcessionRequest;

  //(02) Injecting the concession service
  constructor(private concessionsService: ConcessionsService) { }

  ngOnInit(): void {
    //(04) Calling get all concession method
    this.getAllConcessions();
  }


  //(03) calling the service method to get all concessions
  public getAllConcessions() {
    this.concessionsService.findAllConcessions().subscribe(//this will make us notified when something happens
      (response: ConcessionResponse[]) => { //if the response is concession , add it to the response body
        this.concessionResponces = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => { //if the response is error, display the error using alert.
        console.log(Response)
        alert(error.message);
      }
    )
  }

  // (05:) creating a on open modal function programatically
  public onOpenModal(concessionRequest: ConcessionRequest, mode: string): void {
    const contianer = document.getElementById('main-container'); //getting acces to the entire div
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');


    //check whch button the user clicked
    if (mode === 'add') {
      button.setAttribute('data-target', '#addConcessionModal');
    }
    if (mode === 'edit') {
      this.editConcession = concessionRequest; //binding the concession to the form for editing.
      button.setAttribute('data-target', '#editConcessionModal');
    }
    if (mode === 'delete') {
      this.deleteConcession = concessionRequest;
      button.setAttribute('data-target', '#delteConcessionModal');
    }

    // adding the button after the approperiate checks
    contianer.appendChild(button);
    button.click();
  }


  //adding concessison
  // (06) getting the form data and sending it to the server.
  public onAddConcession(addForm: NgForm): void {
    // calling the close button to make the form disappear after entering the data.
    document.getElementById('add-concession-form').click();
    this.concessionsService.addConcession(addForm.value).subscribe( //passing the form data to the
      (response: ConcessionResponse) => {
        console.log(response);
        this.getAllConcessions(); //refreshing the table data.
        addForm.reset(); //clearing the form after process
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  //updating concession

  public onUpdateConcession(concessionId: number, concessionRequest: ConcessionRequest) {
    document.getElementById('update-concession-form').click();
    this.concessionsService.updateConcession(concessionRequest, concessionId).subscribe(
      (Response: ConcessionResponse) => {
        console.log(Response);
        this.getAllConcessions;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  //deleting concession
  public onDeleteConcession(conessionId: number) {
    document.getElementById('delete-concession-form').click;
    this.concessionsService.deleteConcession(conessionId).subscribe(
      (response: void) => {
        console.log(response);
        this.getAllConcessions();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );

  }


  //find concession by id
  // to be implemented.

}
