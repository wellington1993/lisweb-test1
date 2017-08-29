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
