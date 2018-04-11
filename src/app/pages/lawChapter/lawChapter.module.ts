import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { LawChapterRoutingModule, LawChapterComponents } from './lawChapter-routing.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, LawChapterRoutingModule],
  declarations: LawChapterComponents
})
export class LawChapterModule {
  constructor() {
  }
}
