import { Component, OnInit }    from '@angular/core';

import { Pessoa }               from './pessoa';
import { PessoaService }        from './pessoa.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    pessoas: Pessoa[] = [];

    constructor(private pessoaService: PessoaService) { }

    ngOnInit(): void {
        this.pessoaService.getPessoas()
            .then(pessoas => this.pessoas = pessoas);//.slice(1, 5));
    }
}
