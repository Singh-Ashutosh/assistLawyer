import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LawSectionPage } from './';

const routes: Routes = [
  { path: '', component: LawSectionPage, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawSectionRoutingModule {
  constructor() {
  }
}

export const LawSectionComponents = [LawSectionPage];
