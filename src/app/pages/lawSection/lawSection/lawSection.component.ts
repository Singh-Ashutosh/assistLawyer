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
  private lawSectionFormGroup: FormGroup;
  constructor(
    private httpCallServices: HttpCallServices,
    private _fb: FormBuilder
  ) {
    this.lawSectionFormGroup = this._fb.group({
      lawsectionname: [""],
      lawsectiondescription: [""]
    });

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

  addLawSection() {
    console.log(this.lawSectionFormGroup.value);
  }
}
