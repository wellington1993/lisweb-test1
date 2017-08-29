import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { PessoaSearchService } from './pessoa-search.service';
import { Pessoa } from './pessoa';

@Component({
  selector: 'pessoa-search',
  templateUrl: './pessoa-search.component.html',
  styleUrls: [ './pessoa-search.component.css' ],
  providers: [PessoaSearchService]
})
export class PessoaSearchComponent implements OnInit {
  pessoas: Observable<Pessoa[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private pessoaSearchService: PessoaSearchService,
    private router: Router) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pessoas = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.pessoaSearchService.search(term)
        : Observable.of<Pessoa[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Pessoa[]>([]);
      });
  }

  gotoDetail(pessoa: Pessoa): void {
    let link = ['/detail', pessoa.id];
    this.router.navigate(link);
  }
}
