import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    HttpCallServices
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
