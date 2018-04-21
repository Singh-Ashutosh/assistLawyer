import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LawDivisionRoutingModule, LawDivisionComponents } from './lawDivision-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LawDivisionRoutingModule],
  declarations: LawDivisionComponents
})
export class LawDivisionModule {
  constructor() {
  }
}
