import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { Heroi } from './heroi';
 
@Injectable()
export class HeroiSearchService {
 
  constructor(private http: Http) {}
 
  pesquisar(term: string): Observable<Heroi[]> {
    return this.http
               .get(`api/herois/?nome=${term}`)
               .map(response => response.json().data as Heroi[]);
  }
}
