import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawChapterPage } from './';

const routes: Routes = [
  { path: '', component: LawChapterPage, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawChapterRoutingModule {
  constructor() {
  }
}

export const LawChapterComponents = [LawChapterPage];
