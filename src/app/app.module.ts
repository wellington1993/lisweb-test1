import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from "./dashboard.component";
import { HeroisComponent }      from "./herois.component";
import { HeroiDetailComponent } from './heroi-detail.component';
import { HeroiService }         from "./heroi.service";

import { AppRoutingModule }     from './app-routing.module';
import { HeroiSearchComponent } from "./heroi-search.component";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroiDetailComponent,
    HeroisComponent,
    HeroiSearchComponent
  ],
  providers: [ HeroiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
