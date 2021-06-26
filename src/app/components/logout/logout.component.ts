import { Component, OnInit } from '@angular/core';
import { JwtAuthenticationService } from 'src/app/services/jwt-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService:JwtAuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.loggout();
  }

}
