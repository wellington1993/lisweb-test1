import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const herois = [
      { id: 0, nome: 'Blanka' },
      { id: 1, nome: 'Lanterna Verde(José Hernandez)' },
      { id: 2, nome: 'Raio Negro' },
      { id: 3, nome: 'Capitão 7' },
      { id: 4, nome: 'Mancha Solar' },
      { id: 5, nome: 'Capitão Forza' },
      { id: 6, nome: 'Xexéu' },
      { id: 7, nome: 'Nata' },
      { id: 8, nome: 'Shark Girl' },
      { id: 9, nome: 'Jaguar' }
    ];
    return {herois};
  }
}
