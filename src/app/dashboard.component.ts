import { Component, OnInit } from '@angular/core';

import { Heroi }        from './heroi';
import { HeroiService } from './heroi.service';
@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
  })
export class DashboardComponent implements OnInit {
  herois: Heroi[] = [];

  constructor(private HeroiService: HeroiService) {}

  ngOnInit() : void {
    this.HeroiService.getHerois()
      .then(herois => this.herois = herois.slice(0, 4));
    }
 }
