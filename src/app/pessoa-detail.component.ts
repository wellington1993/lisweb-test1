import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Pessoa }                   from './pessoa';
import { PessoaService }            from './pessoa.service';

@Component({
    selector: 'pessoa-detail',
    templateUrl: './pessoa-detail.component.html',
    styleUrls: [ './pessoa-detail.component.css' ]
})
export class PessoaDetailComponent implements OnInit {
    pessoa: Pessoa;

    private pessoasUrl =  'api/pessoas';
    constructor(
        private pessoaService: PessoaService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.pessoaService.getPessoa(
                +params.get('id')
            ))
            .subscribe(pessoa => this.pessoa = pessoa)
    }

    save(): void {
        this.pessoaService.update(this.pessoa)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

    update(pessoa: Pessoa): void {
        const url = this.pessoasUrl + '/' + pessoa.id;;
    }
}
