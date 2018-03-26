import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    HomePage, LawActPage
} from './';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [HomePage, LawActPage],
    providers: [],
    exports: [HomePage, LawActPage]
})
export class TempPageModule { }
