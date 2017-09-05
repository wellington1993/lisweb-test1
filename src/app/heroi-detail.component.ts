import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroiService } from './heroi.service';
import { Heroi }        from "./heroi";

@Component({
  selector: 'heroi-detail',
  templateUrl: './heroi-detail.component.html',
  styleUrls: [ './heroi-detail.component.css' ]
})
export class HeroiDetailComponent implements OnInit {
  heroi: Heroi;
    constructor(
      private heroiService: HeroiService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit(): void {
      this.route.paramMap
        .switchMap((params: ParamMap) => this.heroiService.getHeroi(+params.get('id')))
        .subscribe(heroi => this.heroi = heroi);
    }

    voltar(): void {
      this.location.back();
    }

    salvar(): void {
      this.heroiService.atualiza(this.heroi)
        .then(() => this.voltar());
    }
}
