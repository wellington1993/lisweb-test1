import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';

import { AppRoutingModule }       from './app-routing.module';

import { AppComponent }           from './app.component';
import { DashboardComponent }     from './dashboard.component';
import { PessoaDetailComponent }  from './pessoa-detail.component';
import { PessoasComponent }       from './pessoas.component';
import { PessoaService }          from './pessoa.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PessoaDetailComponent,
    PessoasComponent
  ],
  providers: [ PessoaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
