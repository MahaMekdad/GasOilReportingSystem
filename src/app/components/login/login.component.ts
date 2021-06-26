import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/api/login.service';
import { LoginRequest } from 'src/app/model/loginRequest';
import { UserLoggedInResponse } from 'src/app/model/userLoggedInResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedInUser: UserLoggedInResponse
  form: FormGroup;

  constructor(private _loginService: LoginService, private _formBuilder: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]]
    })
  }

  login() {
    let loginRequest: LoginRequest = this.form.value as LoginRequest
    console.log(loginRequest);
    this._loginService.loginPost(loginRequest).subscribe(
      response => {
        this.loggedInUser = response;
        console.log(response)
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem("userRole", response.jobTitle.toString());
        this._router.navigate(['home'])
      },
      error => {
        console.log(error)
      }
    );
  }

}
