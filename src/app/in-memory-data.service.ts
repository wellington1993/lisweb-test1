import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const pessoas = [
            { id: 0, name: 'Zero'},
            { id: 1, name: 'Danilo'},
            { id: 2, name: 'Paulo'},
            { id: 3, name: 'Francisco'},
            { id: 4, name: 'Wellington'},
            { id: 5, name: 'Claudio'},
            { id: 6, name: 'Fabio'},
            { id: 7, name: 'Francine'}
        ];
        return {pessoas};
    }
}
