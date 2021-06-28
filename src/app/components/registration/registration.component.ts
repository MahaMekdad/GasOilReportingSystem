import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/api/users.service';
import { JobLocation } from 'src/app/model/jobLocation';
import { UserRequest } from 'src/app/model/userRequest';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {
  jobTitles:string[]=["Office Engineer","Field Engineer"];
  email= new FormControl('',[
    Validators.required,
    Validators.email
  ]);
  message:string="";
   userRequest:UserRequest={
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobTitle:1,
    jobLocation:'office',
    password: ''
   };
   addUserForm: FormGroup;
  constructor(private userService:UsersService,private router:Router) {
  }

  ngOnInit(): void {

  }
  setJobLocation(jobLocation):void{
      this.userRequest.jobLocation=jobLocation;
  }
  setJobTitle(jobTitle:number):void{
    this.userRequest.jobTitle=jobTitle;
  }
  register():void{
    this.userService.usersPost(this.userRequest).subscribe( Response=>{
      this.message="You have successfully registered";
      this.router.navigate(["/login"]);
    },error => {
      this.message=error.error.errorMessage;
      // console.log(this.message);
    });
  }
}
