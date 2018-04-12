import { Component } from '@angular/core';

@Component({
    selector: 'html-editor',
    templateUrl: 'html-editor.component.html'
})
export class HtmlEditor {

    public editorValue: string = '';
    
    constructor() {
    }
}
