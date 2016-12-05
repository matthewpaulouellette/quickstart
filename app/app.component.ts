import {Component} from '@angular/core';
import {SideLink} from './side-link';

@Component({
  moduleId: module.id,
  styleUrls: ['app.component.css'],
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
<div class="container-fluid">
    <div class="row">
        <div class="col-xs-2">
            <nav>
                <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            </nav>
            
            <nav>
                <a *ngFor="let sidelink of sidelinks"
                   [routerLink]=[sidelink.url]>
                   {{sidelink.title}}
                </a>
            </nav>

        </div>
        <div class="col-xs-10">
            <router-outlet></router-outlet>
        </div>
    </div>
</div>

`
})

export class AppComponent {
  title = 'Tour of Matty\'s Sick Heroes!! Tour of Matty\'s Sick Heroes!! Tour of Matty\'s Sick Heroes!!';

  sidelinks: SideLink[] = [
    { url: '/dashboard', title: 'dash1' },
    { url: '/dashboard', title: 'dash2' },
    { url: '/dashboard', title: 'dash3' },
    { url: '/heroes', title: 'heros1' },
    { url: '/heroes', title: 'heros2' },
    { url: '/heroes', title: 'heros3' },
  ];

}
