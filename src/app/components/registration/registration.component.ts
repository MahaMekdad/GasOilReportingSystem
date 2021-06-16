import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/api/users.service';
import { JobLocation } from 'src/app/model/jobLocation';
import { UserRequest } from 'src/app/model/userRequest';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {
   userRequest:UserRequest={
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    jobTitle:1,
    jobLocation:'office',
    password: ''
   };
  constructor(private userService:UsersService) {
  }

  ngOnInit(): void {
    
  }
  setJobLocation(jobLocation):void{
      this.userRequest.jobLocation=jobLocation;
  }
  register():void{
    this.userService.usersPost(this.userRequest).subscribe( response => {
      console.log("ji");
    });
  }
}
