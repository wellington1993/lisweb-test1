import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Pessoa } from './pessoa';

@Injectable()
export class PessoaSearchService {
    constructor(private http: Http) {}
    search(term: string): Observable<Pessoa[]> {
        return this.http
                    .get(`api/pessoas/?nmae=${term}`)
                    .map(response => response.json().data as Pessoa[]);
    }
}
