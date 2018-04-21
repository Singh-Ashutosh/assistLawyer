import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpCallServices } from "../../../shared";

@Component({
  selector: "lawDivision-page",
  templateUrl: "lawDivision.component.html"
})
export class LawDivisionPage {
  lawDivisionFormGroup: FormGroup;
  lawDivisions: any;
  constructor(
    private httpCallServices: HttpCallServices,
    private _fb: FormBuilder
  ) {
    this.lawDivisionFormGroup = this._fb.group({
      lawdivisionname: [],
      lawdivisiondescription: []
    });
    this.getLawDivisions();
  }

  addLawDivision() {
    this.httpCallServices
      .addLawDivision(this.lawDivisionFormGroup.value)
      .subscribe(
        res => {
          this.getLawDivisions();
          this.lawDivisionFormGroup.reset();
        },
        err => {
          console.log(err);
        }
      );
  }

  getLawDivisions() {
    this.httpCallServices.getLawDivision().subscribe(res => {
      this.lawDivisions = res;
    });
  }
}
