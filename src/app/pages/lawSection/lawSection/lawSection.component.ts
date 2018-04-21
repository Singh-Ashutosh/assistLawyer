import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpCallServices } from "../../../shared";

@Component({
  selector: "lawSection-page",
  templateUrl: "lawSection.component.html"
})
export class LawSectionPage {
  lawActs: any;
  lawChapters: any;
  lawDivisions: any;
  private lawSectionFormGroup: FormGroup;
  constructor(
    private httpCallServices: HttpCallServices,
    private _fb: FormBuilder
  ) {
    this.lawSectionFormGroup = this._fb.group({
      lawdivisionid: [''],
      lawactid: [''],
      lawchapterid: [''],
      lawsectionname: [],
      lawsectiondescription: []
    });
    this.getLawDivisions();
    this.getLawActs();
    this.getLawChapter();
  }

  getLawActs() {
    this.httpCallServices.getLawAct().subscribe(res => {
      this.lawActs = res;
    });
  }

  getLawChapter() {
    this.httpCallServices.getLawChapter().subscribe(res => {
      this.lawChapters = res;
    });
  }

  getLawDivisions() {
    this.httpCallServices.getLawDivision().subscribe(res => {
      this.lawDivisions = res;
    });
  }

  addLawSection() {
    console.log(this.lawSectionFormGroup.value);
    this.httpCallServices
      .addLawSection(this.lawSectionFormGroup.value)
      .subscribe(
        res => {
          this.lawSectionFormGroup.reset();
        },
        err => {
          console.log(err);
        }
      );
  }
}
