import { JwtAuthenticationService } from 'src/app/services/jwt-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: JwtAuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.authenticationService.loggout();
    this.router.navigate(["/login"]);
  }

}
