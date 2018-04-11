import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpCallServices } from '../../../shared';

@Component({
    selector: 'lawAct-page',
    templateUrl: 'lawAct.component.html'
})

export class LawActPage {
    lawActFormGroup: FormGroup;
    lawActs: any;
    constructor(private httpCallServices: HttpCallServices, private _fb: FormBuilder) {
        this.lawActFormGroup = this._fb.group({
            lawactname: [],
            lawactdescription: []
        });
        this.getLaws();
    }

    addLawAct() {
        this.httpCallServices.addLawAct(this.lawActFormGroup.value).subscribe((res) => {
            this.getLaws();
        }, (err) => {
            console.log(err);
        });
    }

    getLaws() {
        this.httpCallServices.getLawAct().subscribe((res) => {
            this.lawActs = res;
        });
    }
}
