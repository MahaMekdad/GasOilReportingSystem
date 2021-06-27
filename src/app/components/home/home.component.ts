import { Component, OnInit } from '@angular/core';
import { JwtAuthenticationService } from 'src/app/services/jwt-authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authenticationService:JwtAuthenticationService) { }

  ngOnInit(): void {
  }

}
