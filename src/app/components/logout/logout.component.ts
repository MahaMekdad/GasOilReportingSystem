import { JwtAuthenticationService } from 'src/app/services/jwt-authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: JwtAuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.loggout();
  }

}
