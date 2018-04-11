import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    HttpCallServices, HtmlEditor
} from './';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    providers: [
        HttpCallServices
    ],
    exports: []
})
export class SharedModule { }

export const SharedComponents = [HtmlEditor]
