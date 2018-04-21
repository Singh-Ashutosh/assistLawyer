import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpCallServices } from "../../../shared";

@Component({
  selector: "lawAct-page",
  templateUrl: "lawAct.component.html"
})
export class LawActPage {
  lawActFormGroup: FormGroup;
  lawActs: any;
  lawDivisions: any;
  constructor(
    private httpCallServices: HttpCallServices,
    private _fb: FormBuilder
  ) {
    this.lawActFormGroup = this._fb.group({
      lawdivisionid: [''],
      lawactname: [],
      lawactdescription: []
    });
    this.getLawDivisions();
    this.getLawActs();
  }

  addLawAct() {
    this.httpCallServices.addLawAct(this.lawActFormGroup.value).subscribe(
      res => {
        this.getLawActs();
        this.lawActFormGroup.reset();
      },
      err => {
        console.log(err);
      }
    );
  }

  getLawActs() {
    this.httpCallServices.getLawAct().subscribe(res => {
      this.lawActs = res;
    });
  }

  getLawDivisions() {
    this.httpCallServices.getLawDivision().subscribe(res => {
      this.lawDivisions = res;
    });
  }
}
