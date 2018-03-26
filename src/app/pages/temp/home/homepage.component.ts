import { Component } from '@angular/core';

@Component({
    selector: 'home-page',
    templateUrl: 'homepage.component.html'
})
export class HomePage {

    lawActFlag: boolean;

    switchPage(option) {
        if (option === 'lawact') {
            this.lawActFlag = true;
        }
    }
}
