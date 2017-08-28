import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

import { Pessoa }               from './pessoa';
import { PessoaService }        from './pessoa.service';

@Component({
    selector: 'pessoas',
    templateUrl: './pessoas.component.html',
    styleUrls: [ './pessoas.component.css' ]
})
export class PessoasComponent implements OnInit {
    pessoas: Pessoa[];
    selectedPessoa: Pessoa;

    constructor(
        private router: Router,
        private pessoaService: PessoaService) {}

    getPessoas(): void {
        this.pessoaService.getPessoas()
            .then(pessoas => this.pessoas = pessoas);
    }

    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.pessoaService.create(name)
            .then(pessoa => {
                this.pessoas.push(pessoa);
                this.selectedPessoa = null;
            });
    }

    delete(pessoa: Pessoa): void {
        this.pessoaService
            .delete(pessoa.id)
            .then( () => {
                this.pessoas = this.pessoas.filter(p => p !== pessoa)
            });
    }

    ngOnInit(): void {
        this.getPessoas();
    }

    onSelect(pessoa: Pessoa): void {
        this.selectedPessoa = pessoa;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedPessoa.id])
    }
}
