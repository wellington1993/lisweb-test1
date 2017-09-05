import { Component,OnInit } from '@angular/core';
import { Router }           from '@angular/router';

import { Heroi }            from "./heroi";
import { HeroiService}      from "./heroi.service";

@Component({
  selector: 'meus-herois',
  templateUrl: './herois.component.html',
  styleUrls: [ './herois.component.css' ]
})

export class HeroisComponent implements OnInit{
  herois: Heroi[];
  selectedHero: Heroi;

  constructor(
    private router: Router,
    private heroiService: HeroiService) { };

  getHerois(): void {
    this.heroiService.getHerois().then(herois => this.herois = herois);
  }

  ngOnInit(): void {
    this.getHerois();
  }

  onSelect(heroi: Heroi): void {
    this.selectedHero = heroi;
  }

  detalhes(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  adicionar(nome: string): void {
    nome = nome.trim();
    if(!nome) {
      console.error('Nome vazio!') 
    } else { 
        this.heroiService.criar(nome).then(heroi => {
        this.herois.push(heroi);
        this.selectedHero
      })
    }
  }

  deletar(heroi: Heroi): void {
    this.heroiService
        .deletar(heroi.id)
        .then(() => {
          this.herois = this.herois.filter(h => h !== heroi);
          if (this.selectedHero === heroi){  this.selectedHero = null;  }
        });
  }
}
