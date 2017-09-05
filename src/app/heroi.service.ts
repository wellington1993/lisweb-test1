import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Heroi }      from './heroi';

@Injectable()
export class HeroiService {
  private heroisUrl = 'api/herois';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getHerois(): Promise<Heroi[]> {
    return this.http.get(this.heroisUrl)
    .toPromise()
    .then(response => response.json().data as Heroi[])
    .catch(this.handleError);
  }

  getHeroisSlowly(): Promise<Heroi[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHerois()), 2000);
    });
  }

  getHeroi(id: number): Promise<Heroi> {
    const url = `${this.heroisUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Heroi)
      .catch(this.handleError);
  }

  atualiza(heroi: Heroi): Promise<Heroi> {
    const url = `${this.heroisUrl}/${heroi.id}`;
    return this.http
      .put(url, JSON.stringify(heroi), {headers: this.headers})
      .toPromise()
      .then(() => heroi)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro.', error);
    return Promise.reject(error.message || error);
  }

  criar(nome: string): Promise<Heroi> {
    return this.http.post(this.heroisUrl, JSON.stringify({nome: nome}), {headers: this.headers})
      .toPromise().then(res => res.json().data as Heroi).catch(this.handleError);
  }

  deletar(id: number): Promise<void> {
    const url = `${this.heroisUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
