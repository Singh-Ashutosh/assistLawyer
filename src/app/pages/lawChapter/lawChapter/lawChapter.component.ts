import { Component } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { HttpCallServices } from "../../../shared";

@Component({
  selector: "lawChapter-page",
  templateUrl: "lawChapter.component.html"
})
export class LawChapterPage {
  lawChapterFormGroup: FormGroup;
  lawDivisions: any;
  lawActs: any;
  lawChapters: any;
  constructor(
    private httpCallServices: HttpCallServices,
    private _fb: FormBuilder
  ) {
    this.lawChapterFormGroup = this._fb.group({
      lawactid: [''],
      lawdivisionid: [''],
      lawchaptername: [],
      lawchapterdescription: []
    });
    this.getLawAct();
    this.getLawChapter();
    this.getLawDivisions();
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

  getLawDivisions() {
    this.httpCallServices.getLawDivision().subscribe(res => {
      this.lawDivisions = res;
    });
  }

  addLawChapter() {
    this.httpCallServices
      .addLawChapter(this.lawChapterFormGroup.value)
      .subscribe(
        res => {
          this.getLawChapter();
          this.lawChapterFormGroup.reset();
        },
        err => {
          console.log(err);
        }
      );
  }
}
