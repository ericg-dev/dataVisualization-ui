import { Component, OnInit } from '@angular/core';
import { NflStandingsModel } from '../models/nflStandingsModel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public pieChartData: NflStandingsModel[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
