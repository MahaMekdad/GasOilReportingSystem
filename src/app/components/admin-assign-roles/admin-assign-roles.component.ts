import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/api/users.service';
import { UsersRolesService } from 'src/app/api/usersRoles.service';
import { UserRequest } from 'src/app/model/userRequest';
import { UserResponse } from 'src/app/model/userResponse';
import { UserRoleResponse } from 'src/app/model/userRoleResponse';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-assign-roles',
  templateUrl: './admin-assign-roles.component.html',
  styleUrls: ['./admin-assign-roles.component.css']
})
export class AdminAssignRolesComponent implements OnInit {

  users: UserResponse[];

  usersRoles: UserRoleResponse[];

  userToBeUpdated: UserRequest = null;

  index: number;

  modalContent: NgbModalRef;

  form: FormGroup;


  constructor(private _usersService: UsersService, private _usersRoles: UsersRolesService, private _modalService: NgbModal, private _formBuilder: FormBuilder) { }

  triggerModal(content, index) {
    this.modalContent = content;
    this.modalContent = this._modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    this.index = index;
    // this.userToBeUpdated.email = this.users[index].email;
    // this.userToBeUpdated.firstName = this.users[index].firstName;
    // this.userToBeUpdated.lastName = this.users[index].lastName;
    // this.userToBeUpdated.phoneNumber = this.users[index].phoneNumber;
    // this.userToBeUpdated.jobLocation = this.users[index].jobLocation;
    // this.userToBeUpdated.jobTitle = this.users[index].jobTitle;
  }

  ngOnInit(): void {
    this.loadRecords();
    this.loadRoles();
    this.form = this._formBuilder.group({
      jobTitle:[[Validators.required]]
    })
  }

  loadRecords(){
    this._usersService.usersGet(1).subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      });
  }

  loadRoles(){
    this._usersRoles.usersRolesGet().subscribe(
      data => {
        this.usersRoles = data;
      },
      error => {
        console.log(error);
      });
  }

  update(){
    let userRequest: UserRequest = this.form.value as UserRequest;
    userRequest.firstName = this.users[this.index].firstName;
    userRequest.lastName = this.users[this.index].lastName;
    userRequest.phoneNumber = this.users[this.index].phoneNumber;
    userRequest.email = this.users[this.index].email;
    userRequest.jobTitle = +this.form.controls.jobTitle.value;
    userRequest.jobLocation = this.users[this.index].jobLocation;
    console.log(userRequest);
    this._usersService.usersIdPatch(userRequest, this.users[this.index].id).subscribe(
      response => {
        console.log(response + "ff")
        this.closePopUpAndRefreshTable();
      },
      error => {
        console.log(error + "cc")
      }
    );
  }

  closePopUpAndRefreshTable(){
    this.modalContent.dismiss();
    this.loadRecords();
  }

}
