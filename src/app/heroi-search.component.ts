import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
import 'rxjs/add/observable/of';
 
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
import { HeroiSearchService } from './heroi-search.service';
import { Heroi }              from './heroi';
 
@Component({
  selector: 'heroi-search',
  templateUrl: './heroi-search.component.html',
  styleUrls: [ './heroi-search.component.css' ],
  providers: [HeroiSearchService]
})
export class HeroiSearchComponent implements OnInit {
  herois: Observable<Heroi[]>;
  private searchTerms = new Subject<string>();
 
  constructor(
    private heroiSearchService: HeroiSearchService,
    private router: Router) {}
 
  pesquisar(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.herois = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.heroiSearchService.pesquisar(term)
        : Observable.of<Heroi[]>([]))
      .catch(error => {
        console.log('Herói não encontrado');
        return Observable.of<Heroi[]>([]);
      });
  }
 
  detalhes(heroi: Heroi): void {
    let link = ['/detail', heroi.id];
    this.router.navigate(link);
  }
}