import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpCallServices } from "../../../shared";

@Component({
  selector: "lawChapter-page",
  templateUrl: "lawChapter.component.html"
})
export class LawChapterPage {
  lawChapterFormGroup: FormGroup;
  lawActs: any;
  lawChapters: any;
  constructor(
    private httpCallServices: HttpCallServices,
    private _fb: FormBuilder
  ) {
    this.lawChapterFormGroup = this._fb.group({
      lawchaptername: [],
      lawchapterdescription: []
    });
    this.getLawAct();
    this.getLawChapter();
  }

  getLawAct() {
    this.httpCallServices.getLawAct().subscribe(res => {
      this.lawActs = res;
    });
  }

  getLawChapter() {
    this.httpCallServices.getLawChapter().subscribe(res => {
      this.lawChapters = res;
    });
  }
}
