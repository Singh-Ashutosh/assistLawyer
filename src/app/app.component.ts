import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpCallServices } from './shared/services/httpCall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadingFlag: boolean;
  constructor(public router: Router, private httpCallServices: HttpCallServices) {
    this.router.events.subscribe(event => {
      // this.loadingFlag = true;
    });
  }
}
