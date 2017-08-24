import { Component } from '@angular/core';

@Component({
  selector: 'lis-web',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/pessoas" routerLinkActive="active">Pessoas</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: 'Lisweb'
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
