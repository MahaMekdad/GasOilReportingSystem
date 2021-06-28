import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-well-tabs',
  templateUrl: './well-tabs.component.html',
  styleUrls: ['./well-tabs.component.css']
})
export class WellTabsComponent implements OnInit {

  id: number;
  sub: any;
  concessionName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.route.queryParams.subscribe(params => {
      this.concessionName = params.con
    }
    );
    // console.log("horray");
    // console.log(this.id)
  }

}
