import { Pessoa } from './pessoa';
import { PESSOAS } from './mock-pessoas';
import { Injectable } from '@angular/core';

@Injectable()
export class PessoaService {
  getPessoas(): Promise<Pessoa[]> {
    return Promise.resolve(PESSOAS);
  }

  getHeroesSlowly(): Promise<Pessoa[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getPessoas()), 2000);
    });
  }

  getPessoa(id: number): Promise<Pessoa> {
    return this.getPessoas()
      .then(pessoas => pessoas.find(pessoa => pessoa.id === id));
  }
}
