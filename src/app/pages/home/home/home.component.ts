import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: './home.component.html'
})
export class HomePage {
    constructor() {
        console.log('Home page');
    }
}
